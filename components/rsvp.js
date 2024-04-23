import React, { useState, useEffect } from "react";

const RSVP = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("Akan Hadir");
  const [guests, setGuests] = useState({ adults: 1, children: 0 });
  const [message, setMessage] = useState("");
  const [showAllMessages, setShowAllMessages] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Cek apakah ada data pesan yang sudah disubmit di localStorage
    const storedMessages = localStorage.getItem("rsvpMessages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []); // Efek hanya akan berjalan saat komponen dimuat

  const handleRSVPSubmit = (e) => {
    e.preventDefault();
    // Simpan data RSVP
    const rsvpData = {
      name,
      attendance,
      guests,
      message,
    };
    console.log(rsvpData);
    // Tambahkan pesan ke daftar pesan dengan nama pengirim dan kehadiran
    const messageWithSenderAndAttendance = `${name} (${attendance}): ${message}`;
    setMessages([...messages, messageWithSenderAndAttendance]);
    // Simpan pesan baru ke localStorage
    localStorage.setItem(
      "rsvpMessages",
      JSON.stringify([...messages, messageWithSenderAndAttendance])
    );
    // Reset input pesan setelah disubmit
    setMessage("");
  };

  const handleToggleMessages = () => {
    setShowAllMessages(!showAllMessages);
  };

  return (
    <div className="px-4">
      <h2 className="text-3xl font-sacramento text-center text-[#E0AA3E] mb-6">
        Konfirmasi Kehadiran
      </h2>
      <div className="bg-gray-300 py-2">
        <div className="max-w-md mx-auto px-6">
          <form onSubmit={handleRSVPSubmit}>
            <input
              placeholder="Nama"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded p-2 w-full mt-1"
              required
            />
            <div className="py-2">
              <select
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
                className="rounded p-2 w-full mt-1"
              >
                <option value="Kehadiran" disabled selected hidden>
                  Kehadiran
                </option>
                <option value="Akan Hadir">Hadir</option>
                <option value="Tidak Dapat Hadir">Tidak Hadir</option>
              </select>
            </div>
            <div>
              <textarea
                placeholder="Pesan"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border rounded p-2 w-full mt-1 h-24 resize-none"
              ></textarea>
            </div>
            <div className="flex items-center justify-center pt-2">
              <button
                type="submit"
                className="bg-[#9B7651] text-white py-[2px] px-8 rounded"
              >
                Submit
              </button>
            </div>
          </form>
          {messages.length > 5 && (
            <button
              onClick={handleToggleMessages}
              className="text-[#E0AA3E] mt-4 inline-block"
            >
              {showAllMessages
                ? "Sembunyikan pesan lainnya"
                : "Lihat pesan lainnya"}
            </button>
          )}
          <div className="mt-4">
            {showAllMessages
              ? messages.map((msg, index) => (
                  <div key={index} className="p-2 mb-2">
                    {msg}
                  </div>
                ))
              : messages.slice(0, 5).map((msg, index) => (
                  <div key={index} className="p-2 mb-2">
                    {msg}
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
