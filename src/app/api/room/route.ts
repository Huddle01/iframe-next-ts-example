import { randomBytes } from "crypto";



class Huddle01CreateRoomError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export async function GET(request: Request) {
  const API_KEY = process.env.HUDDLE_API_KEY;

  if (!API_KEY) {
    const jsonResponse = new Response(
      JSON.stringify({ msg: "Missing API KEY" }),
      {
        status: 404,
        statusText: "API Key not found",
      }
    );

    return jsonResponse;
  }
  try {
    const response = await fetch(
      "https://api.huddle01.com/api/v1/create-iframe-room",
      {
        method: "POST",
        body: JSON.stringify({
          title: "Huddle01 iFrame Room",
          roomLocked: true,
        }),
        headers: {
          "Content-type": "application/json",
          "x-api-key": API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Huddle01CreateRoomError(
        `Failed to create iframe room: ${response.statusText}`,
        response.status
      );
    }

    const roomId = (await response.json()).data.roomId;
    const jsonResponse = new Response(JSON.stringify({ roomId: roomId }));
    // Set the revalidate and Cache-Control headers on the response
    return jsonResponse;
  } catch (error: any | Huddle01CreateRoomError) {
    console.log(error);
    if (error instanceof Huddle01CreateRoomError) {
      // Handle the Huddle01CreateRoomError error here
      const jsonResponse = new Response(
        JSON.stringify({ error: error.message }),
        {
          status: error.status,
        }
      );

      return jsonResponse;
    } else {
      // Handle the generic error here
      const jsonResponse = new Response(
        JSON.stringify({ error: error.message }),
        { status: 500 }
      );

      return jsonResponse;
    }
  }
}
