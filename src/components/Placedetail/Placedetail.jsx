import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { LocationOn as LocationIcon } from "@mui/icons-material";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import React from "react";

function Placedetail({ place, loading }) {
  return (
    <>
    {loading? (
     <div className="loader-container -mt-24">
     <div className="loader">
       <span></span>
     </div>
   </div>
    ) : (
      <Card
      elevation={6}
      style={{
        borderRadius: "15px",
        overflow: "hidden",
        margin: "16px",
      }}
    >
      <CardMedia
        style={{ height: "200px", objectFit: "cover" }}
        image={place.photo ? place.photo.images.medium.url : "restaurant.jpg"}
        title={place.name}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" align="left" className="text-gray-800" style={{ fontWeight: "bold" }}>
          {place.name}
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography variant="subtitle1" align="right" style={{ fontWeight: "bold" }}>
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
          

        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="subtitle1" align="left" style={{ fontWeight: "bold" }}>
                Price
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" align="right" color="textSecondary">
                {place.price ? place.price : place.price_level}
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="subtitle1" align="left" style={{ fontWeight: "bold", alignItems: "start"} }>
                Ranking
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" align="right" color="textSecondary">
                {place.ranking}
              </Typography>
            </Grid>

            {place?.awards?.map((award) => (
              <Grid item xs={12} key={award.display_name}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <img
                    src={award.images.small}
                    alt={award.display_name}
                    style={{ maxHeight: "20px" }}
                  />
                  <Typography variant="body2" color="textSecondary">
                    {award.display_name}
                  </Typography>
                </Box>
              </Grid>
            ))}

            {place?.cuisine?.map(({ name }) => (
              <Chip
                key={name}
                size="small"
                label={name}
                style={{ margin: "4px", background: "#f0f0f0" }}
              />
            ))}

            {place?.address && (
              <Grid item xs={12}>
                <Typography
                  variant="subtitle2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                    color: "#555",
                  }}
                >
                  <LocationIcon style={{ marginRight: "8px", color: "#777" }} />
                  {place.address}
                </Typography>
              </Grid>
            )}

            {place?.phone && (
              <Grid item xs={12}>
                <Typography
                  variant="subtitle2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#555",
                    justify: "space-between",
                  }}
                >
                  <AddIcCallIcon
                    style={{ marginRight: "8px", color: "#777" }}
                  />
                  {place.phone}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Box>
      </CardContent>

      <CardActions
        style={{
          justifyContent: "space-between",
          padding: "16px",
          background: "#f9f9f9",
        }}
      >
        <Button
          variant="outlined"
          size="small"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Trip Advisor
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </Button>
      </CardActions>
    </Card>

    )}

    </>
  );
}

export default Placedetail;
