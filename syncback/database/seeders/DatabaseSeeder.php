<?php

namespace Database\Seeders;

use App\Models\Address;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        /*
        User::factory()->create([
            'name' => 'Testador',
            'age' => '99',
            'biography' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum nisl in ligula faucibus sodales. In tempus risus semper nunc aliquet pellentesque. Sed semper enim faucibus ultrices molestie. Nunc varius dictum magna. Vestibulum quis gravida mi, nec accumsan tortor. Cras mollis neque ac hendrerit commodo. Quisque semper feugiat diam vel auctor.',
        ]);
*/

        DB::table('users')->insert([
            'name' => 'Testador',
            'age' => '99',
            'biography' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum nisl in ligula faucibus sodales.'

        ]);

        DB::table('addresses')->insert([
            'street' => 'Rua das Pedras',
            'neighborhood' => 'Buzios',
            'state' => 'RJ',
            'user_id' => '1',

        ]);
    }
}
