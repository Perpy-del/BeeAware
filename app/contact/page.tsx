import ButtonComponent from '@/components/ButtonComponent';
import SocialsComponent from '@/components/SocialsComponent';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'BeeAware | Contact',
  description: 'An application to create more awareness about sexual health',
};

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <div>
      <h1>Get in Touch</h1>
      <p>Send us a message! We weould love to hear from you.</p>
      <div>
        <form>
          <div>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <input type="email" placeholder="Email" />
          <input type="text" placeholder="I want to talk about..." />
          <ButtonComponent
            variant="primary"
            btnText={'Send'}
            width={'w-[180px]'}
          />
        </form>

        <aside className="bg-baAccent text-baPrimary">
          <h3>CONTACT INFORMATION</h3>
          <h3>Email: info@beeaware.com</h3>
          <h3>Phone: +234 8124 900 0000</h3>
          <h3>
            Address: 1234 Main St <br />
            Moonstone City, Stardust State 12345
          </h3>
          <SocialsComponent bgVariant={'bg-baPrimary'} color={'white'} />
        </aside>
      </div>
    </div>
  );
};

export default ContactPage;
