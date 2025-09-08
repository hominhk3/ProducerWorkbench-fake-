import React, { useState } from 'react';

// --- SVG Icons ---
const MusicIcon = () => (
  <svg className="w-7 h-7 text-text-primary" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
  </svg>
);

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const EyeOpenIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
    </svg>
);

const EyeClosedIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
    </svg>
);


// --- Main Login Component ---
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) return;

    setIsLoggingIn(true);
    console.log('Logging in with:', { email, password });

    setTimeout(() => {
      alert('Demo: Login successful! Welcome to Producer Workbench.');
      setIsLoggingIn(false);
    }, 1500);
  };
  
  // Các hàm xử lý khác giữ nguyên...

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-dark-bg font-inter">
      <div className="w-full max-w-md animate-fade-in">
        
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-3 bg-accent">
              <MusicIcon />
            </div>
            <h1 className="text-2xl font-bold text-text-primary shadow-lg shadow-accent/30">
              Producer Workbench
            </h1>
          </div>
        </div>

        {/* Login Form Container */}
        <div className="bg-dark-surface rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 text-text-primary">
              Welcome to your Workbench
            </h2>
            <p className="text-sm text-text-secondary">
              Sign in to continue your creative journey
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-primary">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 bg-dark-surface border-border-color text-text-primary transition-all duration-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2 text-text-primary">
                Password
              </label>
              <div className="relative">
                <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 bg-dark-surface border-border-color text-text-primary transition-all duration-200 pr-12 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-text-primary"
                >
                  {isPasswordVisible ? <EyeClosedIcon /> : <EyeOpenIcon />}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3 px-4 rounded-lg font-semibold text-white bg-accent transition-all duration-200 hover:bg-violet-700 hover:-translate-y-px hover:shadow-2xl hover:shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoggingIn ? 'Logging in...' : 'Log In'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-border-color"></div>
            <span className="px-4 text-sm text-text-secondary">or</span>
            <div className="flex-1 h-px bg-border-color"></div>
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            className="w-full py-3 px-4 rounded-lg font-medium border-2 bg-dark-surface border-border-color text-text-primary transition-all duration-200 flex items-center justify-center space-x-3 hover:border-accent"
          >
            <GoogleIcon />
            <span>Continue with Google</span>
          </button>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-text-secondary">
              Don't have an account?{' '}
              <a
                href="#"
                className="font-medium text-accent hover:text-violet-400 transition-colors duration-200"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} Producer Workbench. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;