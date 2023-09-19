import React, { useState } from 'react';
import './App.css';
import songsData from './songs.json';
import SongList from './SongsComponents/SongList';
import AddSongModal from './SongsComponents/AddSongModal';
import EditSongModal from './SongsComponents/EditSongModal';

function App() {
  const [items, setItems] = useState(() => JSON.parse(JSON.stringify(songsData)));
  const [modalOpen, setModalOpen] = useState(false);
  const [songName, setSongName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingSong, setEditingSong] = useState(null);

  const openEditModal = (song) => {
    setEditingSong(song);
    setIsEditModalOpen(true);
  };
  
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingSong(null);
  };
  
  
    const deleteItem = (id) => {
      console.log('Deleting', id);
      const newItems = items.filter(item => item.id !== id);
      console.log('add', newItems);
      setItems(newItems);
    };
    const chunkedSongs = [];
      for (let i = 0; i < songsData.length; i += 5) {
          chunkedSongs.push(songsData.slice(i, i + 5));
      }
    const openModal =() => {
      setModalOpen(true)
    }
    const closeModal = () => {
      setModalOpen(false)
    }

    const addSong = (name, artist) => {
      
      const newSong = { id: Date.now(), name, artist }
      setItems([...items, newSong])
      closeModal()
    }
    const editSong = (id, updatedName, updatedArtist) => {
      const updatedItems = items.map(item =>
        item.id === id ? { ...item, name: updatedName, artist: updatedArtist } : item
      );
      setItems(updatedItems);
      closeEditModal();
    };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-4">Song List
        <button className='absolute right-0 bg-cyan-400 text-sm text-[#ffff] px-4 py-2 m-1 rounded' onClick={openModal}>
          Add Song
        </button>
      </h1>

      <SongList
        items={items}
        deleteItem={deleteItem}
        openEditModal={openEditModal}
      />

      <AddSongModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        songName={songName}
        setSongName={setSongName}
        artistName={artistName}
        setArtistName={setArtistName}
        addSong={addSong}
      />

      {isEditModalOpen && (
        <EditSongModal
          editingSong={editingSong}
          closeEditModal={closeEditModal}
          editSong={editSong}
          setEditingSong={setEditingSong}
          openEditModal={openEditModal}
          items={items}
        />
      )}
    </div>
  );
}

export default App;
