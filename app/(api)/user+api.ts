import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
    try {
        const sql = neon(`${process.env.DATABASE_URL}`);
        const { firstName, lastName, clerkId } = await request.json();

        if (!firstName || !lastName || !clerkId) {
            return new Response(
                JSON.stringify({ error: 'Missing required fields' }),
                { status: 400 }
            );
        }

        const response = await sql`
            INSERT INTO users (firstName, lastName, clerk_id)
            VALUES (${firstName}, ${lastName}, ${clerkId})`;

        return new Response(JSON.stringify(response), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error }), { status: 500 });
    }
}
