export default function Footer() {
  return (
    <>
      <footer className="border-top p-4">
        <div className="copyright text-center text-sm text-muted">
          All rights reserved. Copyright
          © <script>
            document.write(new Date().getFullYear()) 
          </script>
          &nbsp;Nia Cloud by
          <a href="https://www.github.com/milton-webdev/" className="text-secondary ms-1" target="_blank">Odyssey</a>.
        </div>
      </footer>
    </>
  );
}


