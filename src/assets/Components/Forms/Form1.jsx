import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Container, Typography, Card, CardContent, MenuItem } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';

const ReservationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        nic: '',
        passportNumber: '',
        nationality: 'Sri Lanka',
        countryCode: '',
        mobileNumber: '',
        roomCategory: '',
        mealPlan: '',
        adults: '',
        children: '',
        checkinDate: '',
        checkoutDate: ''
    });

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setFormData((prevFormData) => ({
            ...prevFormData,
            checkinDate: today,
            checkoutDate: today
        }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Name: ${formData.name}%0AAddress: ${formData.address}%0ANIC: ${formData.nic}%0APassport Number: ${formData.passportNumber}%0ANationality: ${formData.nationality}%0ACountry Code: ${formData.countryCode}%0AMobile Number: ${formData.mobileNumber}%0ARoom Category: ${formData.roomCategory}%0AMeal Plan: ${formData.mealPlan}%0AAdults: ${formData.adults}%0AChildren: ${formData.children}%0ACheck-in Date: ${formData.checkinDate}%0ACheck-out Date: ${formData.checkoutDate}`;
        const whatsappUrl = `https://wa.me/94716520690?text=${message}`;
        window.location.href = whatsappUrl;
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
            <Card elevation={3}>
                <CardContent>
                    <Typography variant="h4" align="center" gutterBottom>
                        Elephant Eye Hotel Reservation Form
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Nationality"
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                    required
                                >
                                    <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                                    <MenuItem value="Other">Other</MenuItem>
                                </TextField>
                            </Grid>
                            {formData.nationality === 'Sri Lanka' ? (
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="NIC"
                                        name="nic"
                                        value={formData.nic}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                            ) : (
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Passport Number"
                                        name="passportNumber"
                                        value={formData.passportNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Country Code"
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Mobile Number"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>


                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    style={{
                                        backgroundColor: '#329946',
                                        color: '#fff',
                                        padding: '0.75rem',
                                        fontWeight: 'bold'
                                    }}
                                    startIcon={<BookIcon />}
                                >
                                    Book Now
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ReservationForm;