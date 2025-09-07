import { useState } from "react";
import axios from "axios";

function FilterProducer() {
  const [query, setQuery] = useState("");
  const [link, setLink] = useState("");
  const [genres, setGenres] = useState<any[]>([]);
  const [file, setFile] = useState<File | null>(null);
  // const [result, setResult] = useState<any>(null);
  const [producers, setProducers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const searchProducer = async () => {
    setLoading(true);
    const res = await axios.get("http://localhost:5000/api/search-producer", {
      params: { q: query },
    });
    console.log(res.data);
    setProducers(Array.isArray(res.data.producers) ? res.data.producers : []);
    setLoading(false);
  };

  const recommendProducer = async () => {
    setLoading(true);
    const res = await axios.get("http://localhost:5000/api/recommend-producer");
    setProducers(Array.isArray(res.data) ? res.data : []);
    setLoading(false);
  };

  const searchLinkSpotify = async () => {
    setLoading(true);
    const res = await axios.get(
      "http://localhost:5000/api/search-producer-spotify",
      {
        params: { url: link },
      }
    );
    console.log(res.data);
    setProducers(Array.isArray(res.data.producers) ? res.data.producers : []);
    setLoading(false);
  };

  const searchLinkYoutube = async () => {
    setLoading(true);
    const res = await axios.get(
      "http://localhost:5000/api/search-producer-youtube",
      {
        params: { url: link },
      }
    );
    console.log(res.data);
    setProducers(Array.isArray(res.data.producers) ? res.data.producers : []);
    setLoading(false);
  };

   const handleUpload = async () => {
    if (!file) {
      alert("Hãy chọn file âm thanh!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/analyze-audio", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("🎶 Kết quả:", res.data);
      setGenres(res.data.genres || []);
      setProducers(res.data.producers || []);
    } catch (error) {
      console.error("❌ Upload error:", error);
      alert("Upload thất bại!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-6">
      <h1>🎵 Tìm Producer</h1>

      <input
        className="border p-2"
        placeholder="Nhập tên bài hát..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        onClick={searchProducer}
        className="ml-2 p-2 bg-blue-500 text-white"
      >
        Tìm theo bài hát
      </button>
      <button
        onClick={recommendProducer}
        className="ml-2 mr-2 p-2 bg-green-500 text-white"
      >
        Gợi ý Producer
      </button>

      <input
        className="border p-2"
        placeholder="Paste link Spotify/YouTube..."
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button
        onClick={searchLinkSpotify}
        className="ml-2 p-2 bg-green-500 text-white"
      >
        Tìm theo Spotify
      </button>
      <button
        onClick={searchLinkYoutube}
        className="ml-2 p-2 bg-red-500 text-white"
        disabled={loading}
      >
        {loading ? "Đang xử lý" : "Tìm theo Youtube"}
      </button>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">🎵 Phân tích nhạc & Tìm Producer</h1>

      <div className="mb-4">
        <input
          type="file"
          accept="audio/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleUpload}
          disabled={loading}
        >
          {loading ? "Đang xử lý..." : "Upload & Analyze"}
        </button>
      </div>

      {genres.length > 0 && (
        <div className="mb-4">
          <h2 className="font-semibold">🎶 Genres nhận diện:</h2>
          <ul className="list-disc pl-5">
            {genres.map((g, i) => (
              <li key={i}>
                {g.label} – {(g.score * 100).toFixed(1)}%
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
      <ul>
        {producers.map((p) => (
          <li key={p.id} className="mt-2 border p-2">
            <strong>{p.name}</strong> <br />
            Genres: {p.genres.join(", ")} <br />
            Rating: {p.rating} ⭐ | Popularity: {p.popularity}🔥
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterProducer;
