import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:90%;
    margin:auto;
    height: auto;
    border: 1px solid fred;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 20px;
    margin-top: 30px;
`;

const Box = styled.div`
    width: 95%;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    padding: 10px;
`;

const Button = styled.div`
     font: 20px;
  padding: 10px;
  background-color: #ff6e26;
  color: white;
  border: none;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
`;


export default function Home() {
    const [movies, setMovies] = React.useState([]);

    const addBooking = (id,title,image) => {
        const payload = {
          id: id,
          title: title,
          image: image,
          name: "Sam",
          Seat: "A6"
        };
    
    
        fetch("http://localhost:8081/moviesBooked", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(() => {
            alert(title + " Booked");
          })
          .catch((err) => {
            alert(" ⚠️ Already Booked");
          });
      };

    React.useEffect(() => {
        fetch(`http://localhost:8081/movies`)
            .then((res) => res.json())
            .then((res) => setMovies(res))
            .catch((err) => console.log(err));
    }, []);
    return (
        <Container>

            {movies?.map((movies) => (
                <Box>
                    <img style={{ width: "200px", height: "200px" }} src={movies.poster_path} alt='poster' />
                    <p style={{ fontWeight: "800", height: "20px"}}>{movies.title}</p>
                    <p>Release Date :  {movies.release_date}</p>
                    <Button onClick={()=>{
                        addBooking(movies.id,movies.title,movies.poster_path)
                    }}>BOOK NOW</Button>
                </Box>
            ))}

        </Container>

    )
}
