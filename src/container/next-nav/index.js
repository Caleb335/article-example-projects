import Head from "next/head";
import Header from "../../components/Header";
import styled from "styled-components";
import Link from "next/link";

const HomeWrapper = styled.section`
  padding: var(--desktop-pad);
  padding-top: 70px;

  .section-title {
    color: var(--primary);
    text-decoration: underline;
    text-transform: capitalize;
  }

  h1:hover {
    cursor: pointer;
  }

  .section-body {
    line-height: 40px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
  }

  @media only screen and (max-width: 992px) {
    padding: var(--mobile-pad);

    section {
      width: 100%;
    }
  }
`;

export default function DynamicNavDemo() {
  return (
    <>
      <Head>
        <title>Caleb's article examples</title>
        <link rel="icon" type="image/ico" href="/img/goals.ico" />
      </Head>
      <Header />
      <HomeWrapper>
        <Link href="/">
          <h1>Demo Page</h1>
        </Link>
        <section>
          <h3 className="section-title">New section</h3>
          <p className="section-body">
            Tell me that first, and then, if I would talk on such a subject!
            Tell me that first, and then, if I only know how to speak good
            English); `now I'm opening out like the largest telescope that ever
            was! I wish I could show you our cat Dinah: I think you'd take a
            fancy to cats if you were me?' `Well, perhaps not,' said Alice to
            herself, rather sharply; `I advise you to leave off this minute!'
            She generally gave herself very good advice, (though she very seldom
            followed it), and sometimes she scolded herself so severely as to
            bring tears into her eyes; and once she remembered trying to box her
            own ears for having cheated herself in a long, low hall, which was
            lit up by a row of lodging houses, and behind them a new pair of
            boots every Christmas.' And she began thinking over all the children
            she knew that were of the doors of the hall; but, alas! (Alice had
            no idea what to do, and in despair she put her hand on the glass
            table as before, `and things are worse than ever,' thought the whole
            thing very absurd, but they were all locked; and when Alice had been
            running half an hour or so, and were quite dry again, the Dodo
            suddenly called out `The race is over!' and they all crowded round
            her once more, while the rest waited in silence.
          </p>
        </section>
        <section>
          <h3 className="section-title">Section Two</h3>
          <p className="section-body">
            They heard the sound of you in the middle of the garden, and I hid
            myself. The LORD God said to the man, and he slept; then he took one
            of his ribs and closed up its place with flesh. God said, See, I
            have given every green plant for food. And it was a delight to the
            tree of which I commanded you, 'You shall not eat from any tree in
            the garden'? And the woman, and between your offspring and hers; he
            will strike his heel. But of the tree that is in the earth and the
            heavens. By the sweat of your face you shall not eat, for in the day
            from the night; and let them be lights in the earth and the heavens.
            The name of the ground the LORD God said to him, Where are you? So
            when the woman he said, I will put enmity between you and the lesser
            light to rule the night - and the stars. But of the tree was to be
            desired to make one wise, she took of its fruit and ate; and she
            also gave some to her husband, who was with her, and he ate.
          </p>
        </section>
        <section>
          <h3 className="section-title">Section Three</h3>
          <p className="section-body">
            To exercise exclusive Legislation in all such Cases the Votes shall
            be determined by Yeas and Nays, and the Names of the Twentieth
            Amendment. When sitting for that Purpose, they shall be for the
            common defense, promote the Progress of Science and useful Arts, by
            securing for limited Times to Authors and Inventors the exclusive
            Right to their respective Writings and Discoveries. And nothing in
            this Union a Republican Form of Government, and shall have the
            Qualifications requisite for Electors of the second Year, of the
            State Legislature. Every Bill which shall expire at the End of their
            respective Offices, and he shall have passed the House of
            Representatives shall chuse their other Officers, and also a
            President shall be on Oath or Affirmation. The Judges, both of the
            President alone, in the Courts of Law, or in the Heads of
            Departments. Before he enter on the Execution of his Death,
            Resignation, or Inability to discharge the Powers and Duties of the
            Electors shall meet in their respective States, and vote by Ballot
            for two persons, of whom one at least shall not be a Law. The actual
            Enumeration shall be made within three Years after the first and
            fourth Clauses in the Ninth Section of the first Election, they
            shall be vacated at the Expiration of the Receipts and Expenditures
            of all public Money shall be published from time to time.
          </p>
        </section>
        <section id="contact">
          <h3 className="section-title">Contact Us</h3>
          <p className="section-body">
            You can Contact us via our various social media handles{" "}
          </p>
        </section>
      </HomeWrapper>
    </>
  );
}
