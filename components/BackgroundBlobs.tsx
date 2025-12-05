// // BackgroundBlobs.jsx
// export default function BackgroundBlobs() {
//   return (
//     <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none">
//       <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
//       <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
//       <div className="absolute bottom-[20%] left-[40%] w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
//     </div>
//   );
// }
export default function BackgroundBlobs() {
  return (
    <div className="absolute top-40 left-0 w-full h-full -z-10 pointer-events-none">
      <div
        className="absolute top-[20%] left-[10%] w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        style={{
          animation: "blob 7s infinite",
        }}
      />
      <div
        className="absolute top-[20%] right-[10%] w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        style={{
          animation: "blob 7s infinite",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute bottom-[20%] left-[40%] w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        style={{
          animation: "blob 7s infinite",
          animationDelay: "4s",
        }}
      />

      {/* Add the keyframes directly in a style tag */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: scale(1) translate(0, 0); }
            33% { transform: scale(1.2) translate(30px, -50px); }
            66% { transform: scale(0.8) translate(-20px, 20px); }
          }
        `}
      </style>
    </div>
  );
}
