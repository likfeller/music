import React from 'react';

function AddSongModal({ modalOpen, closeModal, songName, setSongName, artistName, setArtistName, addSong }) {
  return (
    modalOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Add New Song</h2>
        <input
          className="border border-gray-300 px-2 py-1 mb-2"
          placeholder="Song Name"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
        />
        <input
          className="border border-gray-300 px-2 py-1 mb-4"
          placeholder="Artist"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
        />
        <button className="bg-cyan-400 text-white px-4 py-1 rounded" onClick={closeModal}>Cancel</button>
        <button className="bg-cyan-600 text-white px-4 py-1 rounded ml-2" onClick={() => addSong(songName, artistName)}>Add</button>
      </div>
    </div>
    )
  );
}

export default AddSongModal;
