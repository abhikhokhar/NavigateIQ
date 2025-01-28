import React, { useState } from 'react'
import { Box, CircularProgress, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import Placedetail from '../Placedetail/Placedetail'

function List({ places, loading, type, setType, rating, setRating }) {


    const handleChange = (e) => {
        const value = e.target.value

        if (value !== "type") {
            setType(value)
            console.log(value)
        }
    }

    const handleRatingChange = (e) => {
        const value = e.target.value
        if (value !== "") {
            setRating(value)
            console.log(value)
        }
    }


    return (
        <>
            <div className="w-full sm:w-1/3 h-1/2 sm:h-full bg-gray-50 p-2 shadow-lg overflow-y-auto">


                <Box className="p-2">
                    <Box className="text-start">
                        <Typography variant="h6" gutterBottom>
                            Best <span className='text-blue-600 font-semibold'>{type}</span> around you with rating <span className='text-blue-600 font-semibold'>{rating}</span>{rating ? " and above" : ""}
                        </Typography>
                    </Box>
                    <div className="flex flex-row gap-2 ">
                        <FormControl fullWidth variant='standard' sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standerd-label">Select your luxury</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                label="Select your luxury"
                                onChange={handleChange}
                            >
                                <MenuItem value={"restaurants"}>Restaurants</MenuItem>
                                <MenuItem value={"hotels"}>Hotels</MenuItem>
                                <MenuItem value={"attractions"}>Attractions</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Rating</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={rating}
                                onChange={handleRatingChange}
                                label="Rating"
                            >
                                <MenuItem value={0}>
                                    <em>All</em>
                                </MenuItem>
                                <MenuItem value={3}>Above 3.0</MenuItem>
                                <MenuItem value={4}>Above 4.0</MenuItem>
                                <MenuItem value={4.5}>Above 4.5</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                </Box>



                {/* Places List */}
                <div className="max-h-full">
                    {places.length > 0 ? (
                        places.map((place, index) => (
                            <Box className="p-2" key={index}>
                                <Placedetail place={place} loading={loading} />
                            </Box>
                        ))
                    ) : (
                        <Typography variant="body1" className="text-center text-gray-600">
                            No results found.
                        </Typography>
                    )}
                </div>
            </div>
        </>
    )
}


export default List