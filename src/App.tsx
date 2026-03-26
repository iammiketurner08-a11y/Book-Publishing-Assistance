import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';
import SelfPublishing from './pages/SelfPublishing';
import Editing from './pages/Editing';
import CoverDesign from './pages/CoverDesign';
import AuthorWebsite from './pages/AuthorWebsite';
import MarketingServices from './pages/MarketingServices';
import BookVideoTrailer from './pages/BookVideoTrailer';
import BookIllustrations from './pages/BookIllustrations';
import BookFormatting from './pages/BookFormatting';
import AudiobookCreation from './pages/AudiobookCreation';
import BookWriting from './pages/BookWriting';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsConditions />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="services/self-publishing" element={<SelfPublishing />} />
          <Route path="services/editing" element={<Editing />} />
          <Route path="services/cover-design" element={<CoverDesign />} />
          <Route path="services/author-website" element={<AuthorWebsite />} />
          <Route path="services/marketing" element={<MarketingServices />} />
          <Route path="services/book-video-trailer" element={<BookVideoTrailer />} />
          <Route path="services/book-illustrations" element={<BookIllustrations />} />
          <Route path="services/book-formatting" element={<BookFormatting />} />
          <Route path="services/audiobook-creation" element={<AudiobookCreation />} />
          <Route path="services/book-writing" element={<BookWriting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
