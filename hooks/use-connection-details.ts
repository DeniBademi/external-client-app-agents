import { useCallback, useEffect, useState } from 'react';
import { ConnectionDetails } from '@/app/api/connection-details/route';

export default function useConnectionDetails() {
  // Generate room connection details, including:
  //   - A random Room name
  //   - A random Participant name
  //   - An Access Token to permit the participant to join the room
  //   - The URL of the LiveKit server to connect to
  //
  // In real-world application, you would likely allow the user to specify their
  // own participant name, and possibly to choose from existing rooms to join.

  const [connectionDetails, setConnectionDetails] = useState<ConnectionDetails | null>(null);

  const fetchConnectionDetails = useCallback(() => {
    setConnectionDetails(null);
    const url = new URL(
      process.env.NEXT_PUBLIC_CONN_DETAILS_ENDPOINT ?? '/token',
      // process.env.CONN_DETAILS_BASE_URL ?? 'http://localhost:8000'
      process.env.CONN_DETAILS_BASE_URL ?? 'https://192.168.0.148:8000'
    );
    // Read agent_id from the first path segment: /<agent_id>
    try {
      const pathSegments = window.location.pathname.split('/').filter(Boolean);
      const agentId = pathSegments.length > 0 ? pathSegments[0] : null;
      if (agentId) {
        url.searchParams.set('agent_id', agentId);
      }
    } catch (e) {
      // no-op: fallback to no agent_id
    }
    fetch(url.toString())
      .then((res) => res.json())
      .then((data) => {
        setConnectionDetails(data);
      })
      .catch((error) => {
        console.error('Error fetching connection details:', error);
      });
  }, []);

  useEffect(() => {
    fetchConnectionDetails();
  }, [fetchConnectionDetails]);

  return { connectionDetails, refreshConnectionDetails: fetchConnectionDetails };
}
