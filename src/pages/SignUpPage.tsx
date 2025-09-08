import React, { useState } from 'react';

// SVG Icons (giữ nguyên)
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-text-secondary">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639l4.418-4.418a1.012 1.012 0 011.414 0l4.418 4.418a1.012 1.012 0 010 .639l-4.418 4.418a1.012 1.012 0 01-1.414 0l-4.418-4.418z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agreed: false,
  });

  const handleInputChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    // Áp dụng font Inter và màu nền chính
    <div className="min-h-screen bg-dark-bg flex items-center justify-center font-inter p-4">
      {/* Áp dụng màu nền thẻ và hiệu ứng animation */}
      <div className="w-full max-w-md bg-dark-surface rounded-2xl p-8 shadow-lg animate-fade-in">
        
        <div className="flex items-center mb-6">
            <div className="bg-accent p-2 rounded-lg mr-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                </svg>
            </div>
            <h1 className="text-2xl font-bold text-text-primary">Producer Workbench</h1>
        </div>

        <h2 className="text-3xl font-bold text-white mb-2">Create Your Workbench</h2>
        <p className="text-text-secondary mb-8">Join thousands of producers and artists</p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium text-text-secondary block mb-2" htmlFor="fullName">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName"
                className="w-full bg-[#2c2d3c] border border-border-color text-text-primary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter your full name"
                onChange={handleInputChange}
                value={formData.fullName}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-text-secondary block mb-2" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="w-full bg-[#2c2d3c] border border-border-color text-text-primary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter your email"
                onChange={handleInputChange}
                value={formData.email}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-text-secondary block mb-2" htmlFor="password">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  id="password" 
                  name="password"
                  className="w-full bg-[#2c2d3c] border border-border-color text-text-primary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-accent pr-10"
                  placeholder="Create a strong password"
                  onChange={handleInputChange}
                  value={formData.password}
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                    <EyeIcon />
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center mt-6">
            <input 
              id="agreed" 
              name="agreed"
              type="checkbox" 
              className="w-4 h-4 text-accent bg-gray-700 border-gray-600 rounded focus:ring-accent"
              onChange={handleInputChange}
              checked={formData.agreed}
            />
            <label htmlFor="agreed" className="ml-2 text-sm text-text-secondary">
              I agree to the <a href="#" className="text-accent hover:underline">Terms of Service</a> and <a href="#" className="text-accent hover:underline">Privacy Policy</a>
            </label>
          </div>

          <button 
            type="submit" 
            className="w-full bg-accent text-white font-bold py-3 rounded-lg mt-8 hover:bg-opacity-90 transition-colors"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 text-center">
            <p className="text-sm text-text-secondary">
                Already have an account? <a href="#" className="font-bold text-accent hover:underline">Log In</a>
            </p>
        </div>

      </div>
    </div>
  );
}

export default SignUpPage;