import imageUrlBuilder from '@sanity/image-url'
import type { Image } from '@sanity/types'

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function urlFor(source: Image) {
  const sanity = useSanity()
  const builder = imageUrlBuilder(sanity.client)
  return builder.image(source)
}

export function redirectToEmail() {
  const subject = "Hello from the website!";
  const email = "mailto:llama@lcholdings.net?subject=" + encodeURIComponent(subject);
  return window.location.href = email;
}

// TODO: Only print on client side
export function consoleEasterEgg() {
  var asciiText = `
   __    __            __  __           
  /  |  /  |          /  |/  |          
  $$ |  $$ |  ______  $$ |$$ |  ______  
  $$ |__$$ | /      \ $$ |$$ | /      \ 
  $$    $$ |/$$$$$$  |$$ |$$ |/$$$$$$  |
  $$$$$$$$ |$$    $$ |$$ |$$ |$$ |  $$ |
  $$ |  $$ |$$$$$$$$/ $$ |$$ |$$ \__$$ |
  $$ |  $$ |$$       |$$ |$$ |$$    $$/ 
  $$/   $$/  $$$$$$$/ $$/ $$/  $$$$$$/  
                                        
  `

  var consoleText = "\n" + `
  If you are reading this, youve managed to get the console open. If it was a mistake, you can close it easily by pressing the X in the upper right.

  If you didnt open it by mistake, you are just like me! I love to see what is going on behind the scenes!

  The portfolio is open-source! Check it out on GitHub: https://github.com/LCHoldings/LCDevelopment-Portfolio

  If you have any questions, feel free to ask me! I am always happy to help.

  Have a great day!
  // Lazyllama 🦙
  ` + "\n";

  console.log(asciiText + consoleText)
}