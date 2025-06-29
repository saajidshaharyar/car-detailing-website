import React from 'react'
import { XIcon } from 'lucide-react'
interface FeatureModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}
const FeatureModal: React.FC<FeatureModalProps> = ({
  isOpen,
  onClose,
  title,
  icon,
  children,
}) => {
  if (!isOpen) return null
  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Phone-like frame */}
      <div
        className="relative bg-gray-900 rounded-[3rem] max-w-sm w-full h-[80vh] overflow-hidden shadow-2xl border-4 border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-2xl z-10"></div>
        {/* Content */}
        <div className="h-full overflow-y-auto px-6 py-12">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-primary-900/20 rounded-full flex items-center justify-center mb-4">
              {icon}
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          </div>
          <div className="text-lg text-gray-300 leading-relaxed">
            {children}
          </div>
        </div>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          <XIcon className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </div>
  )
}
export default FeatureModal
