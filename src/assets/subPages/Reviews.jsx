// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box, Container } from '@mui/material';
import { Rating } from '@mui/material';
import Hotelcover from "../img/common/common.jpg";
import '../../style/main.css';

const reviews = [
    {
        name: "Aanchal T - Bangalore, India",
        photo: Hotelcover,
        comment: "Hotel is lovely, so clean, big rooms. Very comfortable for family with kids. Heaters in room. Location is amazing, near to Gregory lake, one can walk if they can...",
        rating: 5
    },
    {
        name: "Anuradhini Piliyandala - Sri Lanka",
        photo: Hotelcover,
        comment: "Fantastic Experience at Araliya Red Hotel, Nuwara Eliya! We recently had our wedding at Araliya Red Hotel in Nuwara Eliya, and it was an absolutely amazing experience...",
        rating: 5
    },
    {
        name: "Mohamed Silfan",
        photo: Hotelcover,
        comment: "This place was such a pleasant. We stayed only one night but the experience was very memorable and lovely! This place was quiet, cosy and relaxing.",
        rating: 4
    }
];

// eslint-disable-next-line react/prop-types
const ReviewCard = ({ review }) => (
    <Card elevation={0} sx={{ backgroundColor: 'transparent', boxShadow: 'none', textAlign: 'center' }}>
        <CardMedia
            component="img"
            image={review.photo}
            alt={review.name}
            sx={{ borderRadius: '50%', width: '140px', height: '140px', margin: '0 auto' }}
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ margin: '1em 0', fontSize: '1.2rem' }}>
                {review.comment}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {review.name}
            </Typography>
            <Box mt={1}>
                <Rating value={review.rating} readOnly />
            </Box>
        </CardContent>
    </Card>
);

const Reviews = () => {
    return (
        <Container maxWidth={false} sx={{ padding: '4em 0', backgroundColor: '#f0f4f8', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <h1 className='text-6xl'>Guest Reviews</h1>
            <Grid container spacing={4} sx={{ marginTop: '2em' }}>
                {reviews.map((review, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ReviewCard review={review} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Reviews;