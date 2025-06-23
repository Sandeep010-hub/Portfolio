"use client";

const Loader = () => (
  <div style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(120deg, #10141c 0%, #151a23 100%)",
    zIndex: 1000,
  }}>
    <div className="loader-spinner" />
    <style jsx>{`
      .loader-spinner {
        width: 56px;
        height: 56px;
        border: 6px solid #00c9ff33;
        border-top: 6px solid #00c9ff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default Loader; 