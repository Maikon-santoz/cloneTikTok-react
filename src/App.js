import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight
  }

  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videoList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videoList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{maxHeight : maxHeight + "px"}}>
      <div className="app_videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}

        {/* <Video
        likes={300}
        messages={250}
        shares={930}
        name="Matheus"
        description="gato maluco"
        music="musica de péssima qualidade"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
       /> */}
      </div>
    </div>
  );
}

export default App;
