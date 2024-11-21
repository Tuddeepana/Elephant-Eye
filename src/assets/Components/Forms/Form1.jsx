import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Container, Typography, Card, CardContent, Icon } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';

const ReservationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        nic: '',
        passportNumber: '',
        nationality: '',
        countryCode: '',
        mobileNumber: '',
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
        const message = `Name: ${formData.name}%0ANIC: ${formData.nic}%0APassport Number: ${formData.passportNumber}%0ANationality: ${formData.nationality}%0ACountry Code: ${formData.countryCode}%0AMobile Number: ${formData.mobileNumber}%0AAdults: ${formData.adults}%0AChildren: ${formData.children}%0ACheck-in Date: ${formData.checkinDate}%0ACheck-out Date: ${formData.checkoutDate}`;
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
                                    label="NIC"
                                    name="nic"
                                    value={formData.nic}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
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
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Nationality"
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
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
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Adults"
                                    name="adults"
                                    type="number"
                                    inputProps={{ min: 1 }}
                                    value={formData.adults}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Children"
                                    name="children"
                                    type="number"
                                    inputProps={{ min: 0 }}
                                    value={formData.children}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Check-in Date"
                                    name="checkinDate"
                                    type="date"
                                    value={formData.checkinDate}
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Check-out Date"
                                    name="checkoutDate"
                                    type="date"
                                    value={formData.checkoutDate}
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
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