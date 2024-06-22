import React, { useState } from 'react'
import Navbar from './component/Navbar';
import Mcard from './component/Mcard';
function App() {

  const data = [
    {image:"https://media.ipassio.com/media/blog/10-easy-bollywood-hindi-songs-to-sing-for-beginners/blog_icon/easy-hindi-songs-to-sing-for-beginners.webp",name:"One Love",Artist:"neha kakkar",added:false},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoiL6IKyRw6FrSwwz2KZ-Ryuvot28rp6HW11D8mijcqc0vi6yBxbfABQP-RY6ZEJAA-iw&usqp=CAU",name:"Sajani ree",Artist:"shreya goshal",added:false},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Zp270cVC937IfkMKja_nZ0De-hfmn45VR9ZS65zLJ9Xn4YMEwYZVmsngUGQsIILPKWQ&usqp=CAU",name:"O mahi",Artist:"sonu nigam",added:false},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3DC1o5g7EY-BDEctepiz0AAuO39NW1HhLF_YNKmPzOrfP-LrfWJJbbKZS17UDIvIUkyo&usqp=CAU",name:"Ve kamleya",Artist:"arijit singh",added:false},
    {image:"https://static.vecteezy.com/system/resources/previews/021/693/323/non_2x/a-logo-for-a-music-company-that-is-made-by-song-brand-vector.jpg",name:"Dekha tenu",Artist:"aasha bhosle",added:false},
    {image:"https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2022/01/1_26-Roshni-Mohan-Songs-you-should-add-to-your-playlist-scaled.jpeg?fit=2560%2C1662&ssl=1",name:"Mahiya",Artist:"sonu kakkar",added:false},

  ];

  const [songData,setSongData] = useState(data);
  const handleClick = (index)=>{
    setSongData((previous)=>{
      return previous.map((item,itemindex)=>{
        if(itemindex === index )
          return{...item,added:!item.added
        }
        return item;
      })
    })
  }

  return (
    <div className='w-full h-screen bg-orange-300'>
      <Navbar data={songData}/>
      <div className='px-10 flex gap-10 mt-10 flex-wrap'>
       {songData.map((obj,index) =>(
       <Mcard key={index} index={index} data={obj} handleClick={handleClick}/>
       ))}
      </div>
    </div>
  )
}

export default App;
