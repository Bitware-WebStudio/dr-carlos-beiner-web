export const revalidate = 21600; // 6 horas

export async function GET() {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
        return Response.json(
            { error: "Faltan variables de entorno" },
            { status: 500 }
        );
    }

    const url =
        `https://maps.googleapis.com/maps/api/place/details/json` +
        `?place_id=${placeId}` +
        `&fields=name,rating,user_ratings_total,reviews,url` +
        `&reviews_sort=newest` +
        `&language=es` +
        `&key=${apiKey}`;

    const response = await fetch(url, {
        next: { revalidate },
    });

    const data = await response.json();

    if (!data?.result) {
        return Response.json(
            { error: "Google no devolvió datos", raw: data },
            { status: 500 }
        );
    }

    const r = data.result;

    return Response.json({
        name: r.name,
        rating: r.rating,
        total: r.user_ratings_total,
        url: r.url,
        reviews: (r.reviews || []).map((rev: any) => ({
            author_name: rev.author_name,
            rating: rev.rating,
            text: rev.text,
            relative_time_description: rev.relative_time_description,
            profile_photo_url: rev.profile_photo_url,
            author_url: rev.author_url,
        })),
    });
}
