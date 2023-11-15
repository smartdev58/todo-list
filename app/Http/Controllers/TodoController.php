<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::all()->toArray();
        return array_reverse($todos);      
    }
    public function store(Request $request)
    {
        $todo = new Todo([
            'title' => $request->input('title'),
            'completed' => $request->input('completed')
        ]);
        $todo->save();
        return response()->json('Todo created!');
    }
    public function show($id)
    {
        $todo = Todo::find($id);
        return response()->json($todo);
    }
    public function update($id, Request $request)
    {
        $todo = Todo::find($id);
        $todo->update($request->all());
        return response()->json('Todo updated!');
    }
    public function destroy($id)
    {
        $todo = Todo::find($id);
        $todo->delete();
        return response()->json('Todo deleted!');
    }
}