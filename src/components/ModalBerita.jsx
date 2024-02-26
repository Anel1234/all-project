// ModalBerita.jsx
import React from "react";

const ModalBerita = ({ isOpen, handleClose, handleAction, formData, setFormData }) => {
  return (
    <dialog id="my_modal_1" className={`modal ${isOpen ? 'show' : ''}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <form method="dialog">
          <label>Judul:</label>
          <input
            type="text"
            value={formData.judul}
            onChange={(e) => setFormData({ ...formData, judul: e.target.value })}
          />
          <label>Tanggal Post:</label>
          <input
            type="date"
            value={formData.tanggalPost}
            onChange={(e) => setFormData({ ...formData, tanggalPost: e.target.value })}
          />
          <label>Deskripsi:</label>
          <input
            type="text"
            value={formData.deskripsi}
            onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
          />
          <label>Image:</label>
          <input
            type="url"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          />
          <div className="modal-action">
            <button type="button" onClick={handleClose} className="btn">
              Close
            </button>
            <button type="button" onClick={handleAction} className="btn">
              {formData.editingBeritaId ? "Update Berita" : "Tambah Berita"}
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default ModalBerita;
