import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: 'Искусство минимализма в дизайне',
      description: 'Как меньше значит больше в современном веб-дизайне и почему простота побеждает сложность.',
      image: 'https://cdn.poehali.dev/projects/a8ad4015-82dc-4303-8ea8-f129a20dbfd4/files/dd82eb76-7d63-461a-b09f-efb8cdd986b5.jpg',
      date: '15 октября 2024',
      readTime: '5 мин'
    },
    {
      id: 2,
      title: 'Продуктивность в цифровую эпоху',
      description: 'Практические советы по организации рабочего процесса и достижению баланса между работой и жизнью.',
      image: 'https://cdn.poehali.dev/projects/a8ad4015-82dc-4303-8ea8-f129a20dbfd4/files/1248f3fb-1d70-4d4d-970c-2dcb78285b0c.jpg',
      date: '10 октября 2024',
      readTime: '7 мин'
    },
    {
      id: 3,
      title: 'Архитектура современного мышления',
      description: 'Структурный подход к решению сложных задач и построению эффективных систем.',
      image: 'https://cdn.poehali.dev/projects/a8ad4015-82dc-4303-8ea8-f129a20dbfd4/files/49204529-4057-4688-b78a-514cf988cd5e.jpg',
      date: '5 октября 2024',
      readTime: '6 мин'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-2xl font-semibold tracking-tight">Хэллскари</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="mb-24">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-light mb-6 leading-tight">
              Хэллскари как<br />смысл жизни
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Размышления о том, что действительно важно
            </p>
          </div>
        </section>

        <section className="mb-24">
          <div className="grid gap-12">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-0 shadow-none overflow-hidden group cursor-pointer">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-0 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={16} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-3xl font-light mb-4 group-hover:underline decoration-1 underline-offset-4">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      Читать статью
                      <Icon name="ArrowRight" size={16} />
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-t border-border pt-16">
          <div className="max-w-xl mx-auto text-center">
            <Icon name="Mail" size={32} className="mx-auto mb-6 text-muted-foreground" />
            <h3 className="text-3xl font-light mb-4">Подписка на обновления</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Получайте новые статьи прямо на почту. Без спама, только качественный контент.
            </p>
            
            {subscribed ? (
              <div className="flex items-center justify-center gap-2 text-primary py-3">
                <Icon name="Check" size={20} />
                <span className="font-medium">Спасибо за подписку!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="ваш@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 border-border focus-visible:ring-1"
                />
                <Button type="submit" size="lg" className="px-8">
                  Подписаться
                </Button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-border mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
            <p>© 2024 Хэллскари. Все права защищены.</p>
            <div className="flex gap-6 items-center">
              <a href="#" className="hover:text-foreground transition-colors">О нас</a>
              <a href="#" className="hover:text-foreground transition-colors">Контакты</a>
              <a 
                href="https://t.me/uglyscary" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Icon name="Send" size={16} />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;