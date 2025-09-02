export default function Contact() {
  return (
    <footer
      className="w-full border-t border-[#a78bfa]/20 py-8 mt-12 flex flex-col items-center text-center text-sm text-gray-400"
      id="contact"
    >
      <p className="mb-4">
        I&apos;m currently looking for opportunities to work on challenging projects that combine web development and AI/ML technologies. Have a project in mind? Let&apos;s connect!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          <span>Bengaluru, India 560102</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.708 2.825L15 11.105V5.383zm-.034 6.876l-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z" />
          </svg>
          <a
            href="mailto:manasvi.gupta1684@gmail.com"
            className="hover:text-[#a78bfa] transition-colors"
          >
            manasvi.gupta1684@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg>
          <a
            href="tel:+918250677476"
            className="hover:text-[#a78bfa] transition-colors"
          >
            +91-8250677476
          </a>
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <a
          href="https://www.linkedin.com/in/manasvi16/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#a78bfa] transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/manasvi1684"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#a78bfa] transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
