import React from 'react';
import PanAfricaNavbar from './PanAfricaNavbar';
import Footer from '../Footer';

export default function PanAfricaPage() {
    return (
      <>
        <PanAfricaNavbar />
        <main className="lg:py-32 py-40 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
              PAN Africa 2027
            </h1>
            <p className="text-xl text-center text-gray-600 mb-8">
              Welcome to the PAN Africa 2027 Vision page.
            </p>
            
            {/* Add your custom content here */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Our Vision for 2027
              </h2>
              <p className="text-gray-600 leading-relaxed">
                This is your dedicated space for PAN Africa 2027 content. You can add any custom components, 
                sections, or features specific to this page without interference from the main site navigation.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
}
  