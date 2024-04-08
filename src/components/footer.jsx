function Footer() {
    return <footer className ="page-footer
    #ffc400 amber accent-3">
        <div class="footer-copyright">
            <div class="container">
            by Полоцкий Константин © 
            {new Date().getFullYear()} 
            <a className="grey-text
             text-lighten-4 right"
              href="#!">Repository</a>
            </div>
          </div>
    </footer>
}

export {Footer};