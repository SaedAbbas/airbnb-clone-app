import Link from 'next/link';

const Footer = () => {
  const links = [
    {
      title: 'ABOUT',
      links: [
        'How Airbnb works',
        'Newsroom',
        'Investors',
        'Airbnbn Plus',
        'Airbnb Luxe',
      ],
    },
    {
      title: 'COMMUNITY',
      links: [
        'Accessbility',
        'This is not a real site',
        'Its a pretty awesome clone',
        'Referrals accepted',
        'Papafam',
      ],
    },
    {
      title: 'HOST',
      links: [
        'Accessbility',
        'This is not a real site',
        'Its a pretty awesome clone',
        'Referrals accepted',
        'Papafam',
      ],
    },
    {
      title: 'SUPPORT',
      links: [
        'Accessbility',
        'This is not a real site',
        'Its a pretty awesome clone',
        'Referrals accepted',
        'Papafam',
      ],
    },
  ];

  return (
    <footer className="mt-14 bg-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 px-6 sm:px-16 py-14">
        {links.map((link) => (
          <div key={link.title} className="space-y-4 text-sm text-gray-800">
            <h5 className="font-bold">{link.title}</h5>
            {link.links.map((item) => (
              <Link href="#" key={item} className="block hover:underline">
                {item}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
