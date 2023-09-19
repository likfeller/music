import React from 'react';

function SongList({ items, deleteItem, openEditModal }) {
  return (
      <div className="grid grid-cols-5 gap-4">
          
          {items.map(song => (
              <div key={song.id} className="bg-gray-100 p-4 w-40 h-40 flex flex-col justify-between ml-3 relative">
              <div className='flex items-center justify-between'>
              <button onClick={() => openEditModal(song)}>E</button>

                  
                  <button onClick={() => deleteItem(song.id)} >X</button>
                  
                  </div>
          <p className="text-sm font-semibold">{song.name}</p>
          <p className="text-xs">{song.artist}</p>
        </div>
      ))}
    </div>
  );
}

export default SongList;
