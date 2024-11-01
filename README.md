
# Arina Betting Game

![Logo](/public/arina-logo.png)


## Short Description

**Arina** is an exciting friends betting game where players can challenge each other with various bets. Friends can initiate challenges with a specified prize amount, and other friends can place bets on their favorite challengers or challengeds. The game combines strategy, skill, and a competitive spirit, all while maintaining a fun and engaging environment. With support for cryptocurrency wallet addresses and a seamless user experience, Arina provides a platform for friendly competition and betting.


## Betting Mechanism

### Key Concepts for Fair Betting

  1. **Betting Pools**:

   - Create a separate betting pool for each challenge, aggregating all bets placed by supporters and players.

2. **Winnings Calculation**:
   - The payout for the winner can be calculated based on the total amount in the betting pool and the individual contributions.

### Formulas for Winnings and Losses

1. **Winnings Calculation for Winners**:

   - **Formula**:
     \[
     ext{Winnings} = \left(rac{ ext{Total Pool}}{ ext{Total Bets on Loser}}
     ight) imes ext{Individual Bet Amount}
     \]

2. **Losses for Supporters on Losing Side**:
   - Supporters who bet on the losing side lose their entire bet amount.

### Example Scenario

#### Example Setup

- **Total Bets**:
  - Total Bets on Challenger: \$200
  - Total Bets on Challenged: \$300
  - **Total Pool**: $500 (i.e., $200 + \$300)

#### Outcomes

- **Outcome**: Challenger wins.

#### Calculation of Winnings

- **Supporter Bets**:
  - Supporter 1 (on Challenger): Bet \$50
  - Supporter 2 (on Challenger): Bet \$150
  - Supporter 3 (on Challenged): Bet \$100
  - Supporter 4 (on Challenged): Bet \$200

#### Calculation Steps

1. **Total Bets on Challenged**: \$300
2. **Total Pool**: \$500

##### For Supporter 1:

\[
ext{Winnings} = \left(rac{500}{300}
ight) imes 50 = rac{500 imes 50}{300} pprox 83.33
\]

##### For Supporter 2:

\[
ext{Winnings} = \left(rac{500}{300}
ight) imes 150 = rac{500 imes 150}{300} pprox 250.00
\]

#### Losses Calculation for Supporters on Losing Side

- **Supporters who bet on the Challenged**:
  - Supporter 3: Bet $100 (Loss = $100)
  - Supporter 4: Bet $200 (Loss = $200)

### Summary Table of Bets

| Supporter   | Bet Amount | Outcome    | Winnings/Loss |
| ----------- | ---------- | ---------- | ------------- |
| Supporter 1 | \$50       | Challenger | \$83.33       |
| Supporter 2 | \$150      | Challenger | \$250.00      |
| Supporter 3 | \$100      | Challenged | -\$100        |
| Supporter 4 | \$200      | Challenged | -\$200        |

## Conclusion

Arina provides a platform for friendly competition and betting among friends. The structured database ensures efficient management of users, challenges, bets, and transactions while providing a seamless user experience. By implementing fair betting mechanics, including transparent calculations of winnings and losses, players can enjoy the thrill of betting and the excitement of challenges in Arina!

# Installation 
## Run Locally

Clone the Repository

```bash
  git clone <repository-url>
```

Go to the project directory

```bash
  cd <repository-name>
```

Install dependencies with Yarn

```bash
  yarn install
```

Start the server

```bash
  npm run start
```
## Set Up Firebase Environment Variables

- Create a .env.local file in the root directory.
- Copy environment variables from .env.example (if available).
- Add Firebase credentials from the Firebase console under Project Settings > General > Your Apps > Firebase SDK snippet.
- Example .env.local file:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

## Initialize Firebase in the Project
Ensure your Firebase initialization file (firebaseConfig.js or firebase.js) contains:

```bash
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export default app;

```
## Run the Development Server
- Start the Next.js development server using Yarn:

```bash
yarn dev
```



## Contributors

- [@ Kaliba Enterprises Private Limited ](https://kalibaenterprises.com)

- [@ Cambrian Collective ](https://cambriancollective.xyz/)

- [@ 0x4227 ](https://0x4227.xyz/)