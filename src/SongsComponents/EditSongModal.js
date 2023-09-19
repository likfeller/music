

// import React from 'react';

// function EditSongModal({ editingSong, closeEditModal, editSong, setEditingSong, openEditModal }) {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
//       <div className="bg-white p-4 rounded shadow">
//         <button onClick={() => openEditModal}>E</button>
//         <button
//           className="absolute top-0 left-0 bg-gray-300 text-gray-600 px-2 py-1 rounded-tl"
//           onClick={() => closeEditModal()}
//         >
//           X
//         </button>
//         <h2 className="text-lg font-semibold mb-2">Edit Song</h2>
//         <input
//           className="border border-gray-300 px-2 py-1 mb-2"
//           placeholder="Song Name"
//           value={editingSong.name}
//           onChange={(e) => setEditingSong({ ...editingSong, name: e.target.value })}
          
//         />
//         <input
//           className="border border-gray-300 px-2 py-1 mb-4"
//           placeholder="Artist"
//                   value={editingSong.artist}
//                   onChange={(e) => setEditingSong({ ...editingSong, artist: e.target.value })}

//         />
//         <button className="bg-cyan-400 text-white px-4 py-1 rounded" onClick={() => closeEditModal()}>Cancel</button>
//         <button className="bg-cyan-600 text-white px-4 py-1 rounded ml-2" onClick={() => editSong(editingSong.id, editingSong.name, editingSong.artist)}>Save</button>
//       </div>
//     </div>
//   );
// }

// export default EditSongModal;
import React from 'react';

function EditSongModal({ editingSong, closeEditModal, editSong, setEditingSong }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded shadow">
        
          
            <h2 className="text-lg font-semibold mb-2">Edit Song</h2>
            <input
              className="border border-gray-300 px-2 py-1 mb-2"
              placeholder="Song Name"
              value={editingSong.name}
              onChange={(e) => setEditingSong({ ...editingSong, name: e.target.value })}
            />
            <input
              className="border border-gray-300 px-2 py-1 mb-4"
              placeholder="Artist"
              value={editingSong.artist}
              onChange={(e) => setEditingSong({ ...editingSong, artist: e.target.value })}
            />
            <button className="bg-cyan-400 text-white px-4 py-1 rounded" onClick={() => closeEditModal()}>Cancel</button>
            <button className="bg-cyan-600 text-white px-4 py-1 rounded ml-2" onClick={() => editSong(editingSong.id, editingSong.name, editingSong.artist)}>Save</button>
          
              
    
      </div>
    </div>
  );
}

export default EditSongModal;

