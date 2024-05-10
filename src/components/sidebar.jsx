import React from 'react'
import { FaSpotify } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { LuSearch } from "react-icons/lu";
import { BiLibrary } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
function sidebar() {
  return (
    <div class="sidebar">
        <div class="minicompo1">
            <FaSpotify color='white' size={20}/>
            <p>Spotify</p>
        </div>
        <div class="minicompo2">
            <AiFillHome color='white' size={20} />
            <p>Home</p>
        </div>
        <div class="minicompo3">
            <LuSearch color='white' size={20} />
            <p>Search</p>
        </div>

        <div className='master'>
        <div className="minicompo4">
            <div className="miniminicompo1">
                <BiLibrary size={20} color='white' />
                <p>Your Library</p>
            </div>
            <div className="miniminicompo2">
                <FiPlus color='white' size={20}/>
            </div>
        </div>
        <div className='minicompo5'>
            <p className='minitext1'>Create your first Playlist</p>
            <p className='minitext2'>it's easy, we'll help you</p>
            <button>Create playlist</button>
        </div>
        <div className='minicompo6'>
            <p className='minitext3'>Let's find some podcast to follow</p>
            <p className='minitext4'>We'll keep you updated on new posts</p>
            <button>Browse podcasts</button>
        </div>
        </div>
    </div>

  )
}

export default sidebar