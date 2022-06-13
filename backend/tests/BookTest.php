<?php

namespace App\Tests;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\ApiTestCase;
use App\Entity\Book;
use Hautelook\AliceBundle\PhpUnit\RefreshDatabaseTrait;

class BookTest extends ApiTestCase
{
       public function testBookListing(): void
       {
           $response = static::createClient()->request('GET', '/api/books');

           $this->assertResponseIsSuccessful();
           $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
       }

       public function testCreateBook(): void
       {
           $response = static::createClient()->request('POST', '/api/books', [
               'json' => [
                   "title" => "The Road to Learn React: Your Journey to Master Plain Yet Pragmatic React. Js",
                  "description" => "This book focus on the core React principles, together with programming best practices such as naming convention, coding style,",
                   "genre" => "technology",
                   "reviews" => []
               ]
           ]);

           $this->assertResponseStatusCodeSame(201);
           $this->assertResponseHeaderSame('content-type', 'application/ld+json; charset=utf-8');
           $this->assertJsonContains([
               "title" => "The Road to Learn React: Your Journey to Master Plain Yet Pragmatic React. Js",
               "description" => "This book focus on the core React principles, together with programming best practices such as naming convention, coding style,",
               "genre" => "technology",
               "reviews" => [],
           ]);
           $this->assertMatchesResourceItemJsonSchema(Book::class);
       }
      public function testUpdateBook(): void
      {
          $client = static::createClient();
          $iri = $client->request('POST', '/api/books', [
              'json' => [
                  "title" => "The Road to Learn React: Your Journey to Master Plain Yet Pragmatic React. Js",
                  "description" => "This book focus on the core React principles, together with programming best practices such as naming convention, coding style,",
                  "genre" => "technology",
                  "reviews" => []
              ]
          ])->toArray()['@id'];;
          $client->request('PUT', $iri, ['json' => [
              'title' => 'testing updated title',
          ]]);
          $this->assertResponseIsSuccessful();
          $this->assertJsonContains([
              '@id' => $iri,
              'title' => 'testing updated title',
          ]);
      }

    public function testDeleteBook(): void
    {
        $client = static::createClient();
        $iri = $client->request('POST', '/api/books', [
             'json' => [
                 "title" => "The Road to Learn React: Your Journey to Master Plain Yet Pragmatic React. Js",
                 "description" => "This book focus on the core React principles, together with programming best practices such as naming convention, coding style,",
                 "genre" => "technology",
                 "reviews" => []
             ]
        ])->toArray()['@id'];
        $client->request('DELETE', $iri);
        $this->assertResponseStatusCodeSame(204);
        $this->assertNull(
            static::getContainer()->get('doctrine')->getRepository(Book::class)->findOneBy(['id' => $iri])
        );
    }
}
