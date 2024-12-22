import { useState } from "react";
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function AgentSkillModal({ onClose }) {
  const [isSkillExpanded, setIsSkillExpanded] = useState(true);
  const [emails, setEmails] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const validateAndAddEmail = (email) => {
    setError("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (emails.includes(email)) {
      setError("This email has already been added");
      return false;
    }
    return true;
  };

  const handleEmailSubmit = (e) => {
    if (e.key === "Enter" && inputValue) {
      if (validateAndAddEmail(inputValue)) {
        setEmails([...emails, inputValue]);
        setInputValue("");
      }
    }
  };

  const removeEmail = (emailToRemove) => {
    setEmails(emails.filter((email) => email !== emailToRemove));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <img
                  src="/copilot.jpeg"
                  alt="Copilot"
                  className="w-5 h-6 object-contain"
                />
              </div>
              <h2 className="text-lg font-semibold text-black">Agent skill</h2>
            </div>

            <div
              className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-50 rounded"
              onClick={() => setIsSkillExpanded(!isSkillExpanded)}
            >
              <span className="text-sm text-gray-600">
                Check if on-hand inventory will allow all sales orders to ship
                without delay
              </span>
              {isSkillExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            {isSkillExpanded && (
              <div className="mt-2 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                <p className="mb-2">
                  When <span className="text-blue-500">any vendor</span> sends
                  an email with changes to{" "}
                  <span className="text-blue-500">
                    confirmed purchase orders
                  </span>
                  , check if the resulting
                </p>
                <p className="mb-2">
                  <span className="text-blue-500">on-hand inventory</span> will
                  allow <span className="text-blue-500">all sales orders</span>{" "}
                  to <span className="text-blue-500">ship without delay</span>.
                  If so,
                </p>
                <p>
                  <span className="text-blue-500">
                    update the purchase order
                  </span>{" "}
                  to reflect the change.
                </p>
              </div>
            )}
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-gray-800">
              Enable email access
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Allow the agent to access email inboxes to read mail from known
              vendors
            </p>

            <div className="space-y-3">
              <div>
                <Input
                  type="email"
                  placeholder="Enter email address"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setError("");
                  }}
                  onKeyDown={handleEmailSubmit}
                  className={`w-full ${error ? "border-red-500" : ""} text-gray-600`}
                />
                {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
              </div>

              <div className="flex flex-wrap gap-2">
                {emails.map((email) => (
                  <div
                    key={email}
                    className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    <span>{email}</span>
                    <button
                      onClick={() => removeEmail(email)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button onClick={onClose}>Activate</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

