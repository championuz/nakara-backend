const dotenv = require('dotenv')
const path = require('path')
const sgMail = require('@sendgrid/mail')

// set location to get env
const localEnvPath = path.resolve(process.cwd(), '.env.local')
dotenv.config({path: localEnvPath}) ? dotenv.config() : dotenv.config({path: localEnvPath})

const sendGridKey = process.env.SENDGRID_API_KEY
const verifiedEmail = process.env.EMAIL_USER

// SendGrid
sgMail.setApiKey(sendGridKey)

module.exports.sendVerificationEmail = (email, name, verificationCode, redirectUrl) => {
  const message = {
    from: {
      name: 'NakaraX@noreply',
      email: verifiedEmail
    },
    to: email,
    subject: 'Verify your email address',
    text: `Hello ${name}\n Follow this link to verify your email address.
    https://nakara.herokuapp.com/api/auth/verify-email?code=${verificationCode}&redirectUrl=${redirectUrl}\nif you didn't ask to verify this address, you can ignore this email.\nThanks.
    `,
    html: 
    `
     <h4>Hello ${name}</h4>
     <p>Follow this link to verify your email address.</p>
     https://nakara.herokuapp.com/api/auth/verify-email?code=${verificationCode}&redirectUrl=${redirectUrl}
     <p>if you didn't ask to verify this address, you can ignore this email.</p><br/>
     <p>Thanks.<p>
    `
  }
  return sgMail.send(message)
}

module.exports.sendBuyCryptoAdminEmail = ({name, currency, amount, walletAddress}) => {
  const message = {
    from: {
      name: 'NakaraX',
      email: verifiedEmail
    },
    to: verifiedEmail,
    subject: 'Buy Crypto Request',
    text: `
      Name: ${name}\n
      currency: ${currency}
      Amount: ${amount}\n
      Wallet Address: ${walletAddress}\n
    `,
    html: `
      <p>
        <strong>Name:</strong> ${name}<br/>
        <strong>Currency:</strong> ${currency}<br/>
        <strong>Amount:</strong> ${amount}<br/>
        <strong>Wallet address:</strong> ${walletAddress}
      </p>
    `
  }
  return sgMail.send(message)
}

module.exports.sendBuyCryptoUserEmail = ({name, email, currency, amount, walletAddress}) => {
  const message = {
    from: {
      name: 'NakaraX@noreply',
      email: verifiedEmail
    },
    to: email,
    subject: 'Buy Crypto Request',
    text: `Your request is processing\n
      Name: ${name}\n
      Amount: ${amount}\n
      Wallet Address: ${walletAddress}\n
    `,
    html: `
      <div>
        <h3>Your request to buy crypto is processing</h3>
        <h4>Here are your details:</h4>
        <p>
          <strong>Name:</strong> ${name}<br/>
          <strong>Currency:</strong> ${currency}<br/>
          <strong>Amount:</strong> ${amount}<br/>
          <strong>Wallet address:</strong> ${walletAddress}
        </p>
      <div>
    `
  }
  return sgMail.send(message)
}

module.exports.sendSellCryptoAdminEmail = ({name, currency, amount, bankName, accountName, accountNumber, img}) => {
  const message = {
    from: {
      name: 'NakaraX',
      email: verifiedEmail
    },
    to: verifiedEmail,
    subject: 'Sell Crypto Request',
    text: `
      Name: ${name}\n
      currency: ${currency}
      Amount: ${amount}\n
      Bank name: ${bankName}\n
      Account name: ${accountName}
      Account number: ${accountNumber}\n
      Image: ${img}
    `,
    html: `
      <p>
        <strong>Name:</strong> ${name}<br/>
        <strong>Currency:</strong> ${currency}<br/>
        <strong>Amount:</strong> ${amount}<br/>
        <strong>Bank name:</strong> ${bankName}<br/>
        <strong>Account name:</strong> ${accountName}<br/>
        <strong>Account number:</strong> ${accountNumber}<br/>
        <strong>Image:</strong> ${img}
      </p>
    `
  }
  return sgMail.send(message)
}

module.exports.sendSellCryptoUserEmail = ({name, email, currency, amount, bankName, accountName, accountNumber, img}) => {
  const message = {
    from: {
      name: 'NakaraX@noreply',
      email: verifiedEmail
    },
    to: email,
    subject: 'Sell Crypto Request',
    text: `Your request to sell crypto processing
      Name: ${name}\n
      currency: ${currency}
      Amount: ${amount}\n
      Bank name: ${bankName}\n
      Account name: ${accountName}
      Account number: ${accountNumber}\n
      Image: ${img}
    `,
    html: `
      <div>
        <h3>Your request is to sell crypto is processing</h3>
        <h4>Here are your details:</h4>
        <p>
          <strong>Name:</strong> ${name}<br/>
          <strong>Currency:</strong> ${currency}<br/>
          <strong>Amount:</strong> ${amount}<br/>
          <strong>Bank name:</strong> ${bankName}<br/>
          <strong>Account name:</strong> ${accountName}<br/>
          <strong>Account number:</strong> ${accountNumber}<br/>
          <strong>Image:</strong> <a href='${img}'>view image</a>
        </p>
      </div>
    `
  }
  return sgMail.send(message)
}

module.exports.addFundsAdminEmail = ({name, cardDetails, amount}) => {
  const message = {
    from: {
      name: 'NakaraX',
      email: verifiedEmail
    },
    to: verifiedEmail,
    subject: 'Redeem Gift Card Request',
    text: `
      Name: ${name}\n
      Gift card details: ${cardDetails}
      Amount: ${amount}\n
    `,
    html: `
      <div>
        <p>
          <strong>Name:</strong> ${name}<br/>
          <strong>Gift card details:</strong> ${cardDetails}<br/>
          <strong>Amount:</strong> ${amount}<br/>
        </p>
      </div>
    `
  }
  return sgMail.send(message)
}

module.exports.addFundsUserEmail = ({name, email, cardDetails, amount}) => {
  const message = {
    from: {
      name: 'NakaraX@noreply',
      email: verifiedEmail
    },
    to: email,
    subject: 'Redeem Gift Card Request',
    text: `Your request to redeem your gift card is processing
      Name: ${name}\n
      Gift card details: ${cardDetails}
      Amount: ${amount}\n
    `,
    html: `
      <div>
        <h3>Your request to redeem your gift is processing</h3>
        <h4>Here are your details:</h4>
        <p>
          <strong>Name:</strong> ${name}<br/>
          <strong>Gift card details:</strong> ${cardDetails}<br/>
          <strong>Amount:</strong> ${amount}<br/>
        </p>
      </div>
    `
  }
  return sgMail.send(message)
}

