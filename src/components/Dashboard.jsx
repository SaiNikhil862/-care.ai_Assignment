import { useEffect, useState } from "react"
import api from "../services/api"
import UploadReport from "./UploadReport"
import AddVital from "./AddVital"

export default function Dashboard() {
  const [reports, setReports] = useState([])

  useEffect(() => {
    api.get("/reports").then(res => setReports(res.data))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Digital Health Wallet
        </h1>
        <p className="text-gray-500">
          Manage your health reports and vitals securely
        </p>
      </div>

      {/* Actions */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <UploadReport />
        <AddVital />
      </div>

      {/* Reports List */}
      <div className="bg-white rounded-lg shadow p-5">
        <h2 className="text-lg font-semibold mb-4">
          My Medical Reports
        </h2>

        {reports.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No reports uploaded yet.
          </p>
        ) : (
          <ul className="divide-y">
            {reports.map(r => (
              <li
                key={r.id}
                className="py-3 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium text-gray-800">
                    {r.report_type}
                  </p>
                  <p className="text-sm text-gray-500">
                    Date: {r.report_date}
                  </p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  Uploaded
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
