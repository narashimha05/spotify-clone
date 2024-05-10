import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from 'react-icons/fa6';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
const tracks = [
  { id: 1, title: 'Sarangi Dariya', artist: 'Mangli', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-XD6vueUpA2bmvPtvkDZFYihjLI30XddbNd0VNLb2QGhlifeVQZlDWVxLfizBfb8IeVs&usqp=CAU', audio: '/songs/sarangi-dariya.mp3' },
  { id: 2, title: 'Let Her Go', artist: 'Passenger', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVDIF5-cfp78kkeiGeCNynY12g643Vj9g_LAKh6XuaSw&s', audio: '/songs/sung2.mp3'  },
  { id: 3, title: 'Older', artist: 'Sasha Alex Sloan', image: 'https://i1.sndcdn.com/artworks-000490659705-muj34f-t500x500.jpg', audio: '/songs/sung3.mp3' },
  { id: 4, title: 'Daylight', artist: 'David Kushner', image: 'https://upload.wikimedia.org/wikipedia/en/1/1e/David_Kushner-_Daylight.png', audio: '/songs/sung4.mp3'}
  // Add more tracks as needed
];



function MusicCard({ track, isPlaying, togglePlay }) {
  return (
    <div className="music-card">
      <img
        src={track.image}
        alt={track.title}
        onClick={() => togglePlay(track)} // Pass the track object here
      />
      <div>
        <h3>{track.title}</h3>
        <p>{track.artist}</p>
      </div>
    </div>
  );
}


function Mainbar1() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(new Audio(tracks[currentTrackIndex].audio));

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('timeupdate', updateTime);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
    };
  }, [currentTime]);

  const playPrevious = () => {
    const newIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(newIndex);
    setIsPlaying(true);
  };

  const playNext = () => {
    const newIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(newIndex);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const currentTrack = tracks[currentTrackIndex];

  const duration = audioRef.current.duration || 0;
  const progress = (currentTime / duration) * 100;
  // 
  return (
    <div class="mainbar">

       <div className='minimainbar1'>

        <div className='miniminimainbar1'>
            <FaAngleLeft size={28} className='lefticon' color='white'/>
            <FaAngleRight size={28} className='righticon' color='white'/>
        </div>

        <div className='miniminimainbar2'>
          <p className='explorepremium'>Explore Premium</p>
          <FaRegBell size={28} className='bellicon' color='white'/>
          <IoIosPeople size={28} className="peopleicon "color='white'/>
          <p className='letterC'>C</p>

        </div>
       </div>
       <div className="minimainbar2">
        <p className='all'>All</p>
        <p>Music</p>
        <p>Podcasts</p>
       </div>

       <div className='minimainbar3'>
        <div className='commonmainbar'>
          <img className="imgicon" src="https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg" alt="liked songs" />
          <p>Liked Songs</p>
        </div>
        <div className='commonmainbar'>
        <img className="imgicon" src="https://i.scdn.co/image/ab67706c0000da843cdf544ad09980c839a8d00d" alt="Top Bollywood Hits" />
          <p>Top Bollywood Hits</p>
        </div>
        <div className='commonmainbar'>
        <img className="imgicon" src="https://i.scdn.co/image/ab67616d0000b273707c23699cc04ba3a5919d85" alt="Villian Cries, Man" />
          <p>Villian Cries, Man</p>
        </div>
        <div className='commonmainbar'>
        <img className="imgicon" src="https://c.saavncdn.com/editorial/BestIndianLoFiHits_20220218042449_500x500.jpg" alt="Best Indian Lo-Fi Hits" />
          <p>Best Indian Lo-Fi Hits</p>
        </div>
       </div>


       <div className='minimainbar3'>
        <div className='commonmainbar'>
          <img className="imgicon" src="https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg" alt="liked songs" />
          <p>Liked Songs</p>
        </div>
        <div className='commonmainbar'>
        <img className="imgicon" src="https://i.scdn.co/image/ab67706c0000da843cdf544ad09980c839a8d00d" alt="Top Bollywood Hits" />
          <p>Top Bollywood Hits</p>
        </div>
        <div className='commonmainbar'>
        <img className="imgicon" src="https://i.scdn.co/image/ab67616d0000b273707c23699cc04ba3a5919d85" alt="Villian Cries, Man" />
          <p>Villian Cries, Man</p>
        </div>
        <div className='commonmainbar'>
        <img className="imgicon" src="https://c.saavncdn.com/editorial/BestIndianLoFiHits_20220218042449_500x500.jpg" alt="Best Indian Lo-Fi Hits" />
          <p>Best Indian Lo-Fi Hits</p>
        </div>
       </div>

       <div className='minimainbar4'>
        <p>Made for Chinnari Narashimha</p>
       </div>

       <div className="minimainbar5">
        {tracks.map((track) => (
        <MusicCard key={currentTrack.id}
        track={track}
        isPlaying={isPlaying}
        togglePlay={togglePlay} />
      ))}
    </div>
    <progress value={progress} max="100" className='progressbar' />
      <div className='controlicons'>
      <MdSkipPrevious size={28} className='skipicon' onClick={playPrevious} color='white'/>
      <button className='playpause' onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <FaPause onClick={togglePlay}/> : <FaPlay onClick={togglePlay}/>}
      </button>
      <MdSkipNext size={28} className='skipicon' onClick={playNext} color='white'/>
      </div>
    </div>
  )
}

export default Mainbar1