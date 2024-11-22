import React, { useState } from 'react';
import { Box, Button, Typography, TextField, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)`
    padding: 2rem;
    background: #ffff;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid #ddd;
    max-width: 400px;
    width: 100%;
`;

const Offer = () => {
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Handle the image upload logic here
        setTimeout(() => {
            setLoading(false);
            // Reset form after upload
            setImage(null);
            setTitle('');
        }, 2000);
    };

    return (
        <StyledBox>
            <Typography variant="h5" component="h1" gutterBottom>
                Upload the Offer Image
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    value={title}
                    onChange={handleTitleChange}
                />
                <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    sx={{ mt: 2, mb: 2 }}
                >
                    {image ? image.name : "Choose Image"}
                    <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </Button>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} /> : "Upload"}
                </Button>
            </form>
        </StyledBox>
    );
};

export default Offer;