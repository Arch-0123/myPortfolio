/**
 * Digital Clock JavaScript Module
 * Displays current date and time in real-time
 */

class DigitalClock {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
    this.intervalId = null;
    
    if (!this.element) {
      console.error(`Element with id "${elementId}" not found`);
      return;
    }
    
    this.init();
  }

  /**
   * Initialize the clock and start updating
   */
  init() {
    this.update();
    this.intervalId = setInterval(() => this.update(), 1000);
  }

  /**
   * Update the clock display with current date and time
   */
  update() {
    const now = new Date();
    const formattedDateTime = this.formatDateTime(now);
    this.element.textContent = formattedDateTime;
  }

  /**
   * Format date and time as YYYY-MM-DD HH:MM:SS
   * @param {Date} date - The date object to format
   * @returns {string} Formatted date and time string
   */
  formatDateTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  /**
   * Get current time object
   * @returns {Object} Object containing date, time, and formatted string
   */
  getTime() {
    const now = new Date();
    return {
      date: now,
      formatted: this.formatDateTime(now),
      unix: now.getTime()
    };
  }

  /**
   * Stop the clock
   */
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  /**
   * Resume the clock
   */
  resume() {
    if (!this.intervalId) {
      this.init();
    }
  }

  /**
   * Set custom format for display
   * @param {string} format - Format string (basic support for YYYY, MM, DD, HH, MM, SS)
   */
  setFormat(format) {
    this.customFormat = format;
  }
}

// Export for module usage (CommonJS and ES6)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DigitalClock;
}

// Usage Example:
// const clock = new DigitalClock('clock-display');
// 
// HTML Example:
// <div id="clock-display"></div>
