import { useState } from "react"
import api from "../services/api"

export default function UploadReport() {
  const [file, setFile] = useState(null)
  const [type, setType] = useState("")
  const [date, setDate] = useState("")

  const upload = async () => {
    if (!file || !type || !date) {
      alert("Please fill all fields")
      return
    }

    const fd = new FormData()
    fd.append("report_type", type)
    fd.append("report_date", date)
    fd.append("file", file)

    await api.post("/reports/upload", fd)
    alert("Report uploaded successfully")
  }

  return (
    <div className="bg-white rounded-lg shadow p-5">
      <h3 className="font-semibold mb-4">
        Upload Medical Report
      </h3>

      <input
        className="w-full mb-3 p-2 border rounded"
        placeholder="Report Type (e.g. Blood Test, X-Ray)"
        onChange={e => setType(e.target.value)}
      />

      <input
        type="date"
        className="w-full mb-3 p-2 border rounded"
        onChange={e => setDate(e.target.value)}
      />

      <input
        type="file"
        className="w-full mb-3 bg-white p-2 border rounded "
        onChange={e => setFile(e.target.files[0])}
      />

      <button
        onClick={upload}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Upload Report
      </button>
    </div>
  )
}
