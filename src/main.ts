import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="app-container">
      <header>
        <h1>Welcome to {{ name }}'s Portfolio</h1>
      </header>
      <main>
        <p>Explore my web development projects and achievements.</p>
        <a target="_blank" href="https://angular.dev/overview" class="learn-more">
          Learn more about Angular
        </a>
      </main>
      <footer>
      <p>&copy; {{ currentYear }} K-Devp-V-2o2 (Khurram Iqbal). All Rights Reserved.</p>
      </footer>
    </div>
  `,
  styles: [
    `
      .app-container {
        font-family: 'Poppins', sans-serif;
        text-align: center;
        margin: 2rem auto;
        max-width: 600px;
      }
      header h1 {
        font-size: 2rem;
        color: #4a90e2;
      }
      main p {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }
      .learn-more {
        text-decoration: none;
        color: #4a90e2;
        font-weight: bold;
      }
      footer {
        margin-top: 2rem;
        font-size: 0.9rem;
        color: #777;
      }
    `,
  ],
})
export class App {
  name = 'KDEVP';
  currentYear = new Date().getFullYear();
}

bootstrapApplication(App);

