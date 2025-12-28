import { useState } from "react"
import api from "../services/api"

export default function AddVital() {
  const [type, setType] = useState("")
  const [value, setValue] = useState("")

  const save = async () => {
    if (!type || !value) {
      alert("Please fill all fields")
      return
    }

    await api.post("/vitals", {
      vital_type: type,
      value,
      recorded_at: new Date().toISOString().slice(0, 10)
    })

    alert("Vital recorded")
  }

  return (
    <div className="bg-white rounded-lg shadow p-5">
      <h3 className="font-semibold mb-4">
        Add Vital Measurement
      </h3>

      <input
        className="w-full mb-3 p-2 border rounded"
        placeholder="Vital Type (BP, Sugar, Heart Rate)"
        onChange={e => setType(e.target.value)}
      />

      <input
        className="w-full mb-3 p-2 border rounded"
        placeholder="Value (e.g. 120/80)"
        onChange={e => setValue(e.target.value)}
      />

      <button
        onClick={save}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Save Vital
      </button>
    </div>
  )
}
