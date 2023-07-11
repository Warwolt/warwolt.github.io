---
layout: post
title:  "Introduction to Euclidian Geometry: Creating an equilateral triangle from scratch"
excerpt_separator: <!--more-->
---

I'm currently reading reading [Euclid's *Elements*](https://en.wikipedia.org/wiki/Euclid%27s_Elements),
which is a geometry text book where figures are constructed using a straightedge a compass.

This post is about the first proposition in the *Elements*; creating an equilateral
triangle from scratch.

Learning to do this is a nice introduction to constructive geometry, which is a
hands-on way to do mathematics.

<!--more-->

## Equilateral triangles

the *Elements* was written by Euclid over two millenia ago (300 BC), and was until
around a century ago the standard text boox for geometry in many parts of the
world, and is considered one of the most influental text books ever written.

It consists of 13 books (which are more like "parts" of a single book, my copy
of all 13 books is only 500 pages long), where the first book is about various
constructions of triangles.

The first of these is an *equilateral* triangle:

<figure>
    <script type="text/tikz">
        \begin{tikzpicture}[scale=1.25, transform shape]
        \draw (0,0) -- (5,0) -- ++(120:5) -- cycle;
        \end{tikzpicture}
    </script>
    <figcaption>an equilateral triangle.</figcaption>
</figure>

A triangle is equilateral if all three sides of it are equal to each other in
length.

## Geometric construction using straightedge and compass

All the figures in the *Elements* are constructed using the straightedge and a compass
(and some kind of drawing tool, like a pen).

A straightedge is like a ruler without markings on it, and is used to draw
straight lines (but not to measure them), and a compass is a two-legged tool for
drawing circle, by fixing one leg in a point and spinning the other leg (with a
pen attached).

<figure>
<img src="/assets/images/2023-07-09/ruler_and_compass.jpg" alt="Straightedge and compass">
<figcaption>ruler used as straightedge (left), a compass (right), a pen (bottom) and paper</figcaption>
</figure>

When working with a straightedge and compass, we halso have to have some plane
to draw _onto_. This could be a blackboard, a piece of paper, the sand at the
beach, or a computer screen.

This plane is refered to as the *ambient* plane since it's not a plane we've
constructed ourselves, rather it's assumed to be there in the background.

### Using the straightedge and compass

In the *Elements*, a couple of statements called the "postulates" describe what can be
done with a straightedge and a compass. We'll use Postulate 1 and Postulate 3.

#### Postulate 1. To draw a straight line from any point to any point.

Although not explicit in the *Elements*, we can safely assume that we can form a
point anywhere we want by placing our drawing tool onto the ambient plane
(placing a pen on a sheet of paper).

<figure>
<img src="/assets/images/2023-07-09/draw_point.jpg" alt="A pen drawing a point on a paper">
<figcaption>drawing a point on the paper using a pen.</figcaption>
</figure>

A point is denoted using a single capital letter, like $A$ or $B$.

<figure>
<img src="/assets/images/2023-07-09/drawing_line.jpg" alt="A ruler being used to draw a straight line">
<figcaption>drawing a line segment using a straightedge.</figcaption>
</figure>

Once we have two points, we can join them together into a line segment using the
straightedge. If the segment was formed from points $A$ and $B$, it's denoted
$AB$.

#### Postulate 3. To describe a circle with any center and radius.

The compass can create a circle from a given line segment, by placing each leg
on the respective end points of the segment, and spinning the compass around the
fixed leg.

The point that compass rests on is called the circle's *center*, and the line segment is called it's *radius*.

<figure>
<img src="/assets/images/2023-07-09/draw_circle.jpg" alt="A compass being used to rotate a pen around a point to draw a circle">
<figcaption>drawing a circle using a compass.</figcaption>
</figure>

The same circle can have any number of radii, since we can draw any number of
segments from the center out to the circle. Each of these radii will equal to
each other in length.

Because of this, we can refer to a circle by just it's center point, e.g. $A$.
To make it clear that we refer to a circle, we prefix the name with a ring, like
$\bigcirc A$.

## Constructing the triangle

We now have tools and know how to use them, so we can start with constructing
the equilateral triangle.

The theory of the *Elements* is presented through a series of problems with solutions,
where each problem is called a proposition. Each proposition begins with a
statement of what is to be done, where the first proposition states the
following problem:

> To construct an equilateral triangle on a given finite straight line.

The premise of this problem is that there is already some line segment given. A
triangle is to be constructed from this segment where each side equal the others
in length.

Since we don't have a line segment yet, we'll create two points $A$ and $B$ and
join them into a segment $AB$ using Postulate 1:

<figure>
    <script type="text/tikz">
        \begin{tikzpicture}[scale=1.25, transform shape]
        \draw
            (0,0) node[left]{A}
            -- (3,0) node[right]{B};
        \draw[draw=none] (1.5,0) circle (0.5);
        \end{tikzpicture}
    </script>
    <figcaption>the given line segment.</figcaption>
</figure>

Then we use Postulate 3 to create a circle $\bigcirc A$, with point $A$ as
center and segment $AB$ as radius:

<figure>
    <script type="text/tikz">
        \begin{tikzpicture}[scale=1.25, transform shape]
        \draw
            (0,0) node[left]{A}
            -- (3,0) node[right]{B};
        \draw (0,0) circle (3);
        \draw[draw=none] (3,0) circle (3);
        \end{tikzpicture}
    </script>
    <figcaption>adding the first circle.</figcaption>
</figure>

And then do the same with point $B$ and segment $AB$ to form circle $\bigcirc B$:

<figure>
    <script type="text/tikz">
        \begin{tikzpicture}[scale=1.25, transform shape]
        \draw
            (0,0) node[left]{A}
            -- (3,0) node[right]{B};
        \draw (0,0) circle (3);
        \draw (3,0) circle (3);
        \end{tikzpicture}
    </script>
    <figcaption>adding the second circle.</figcaption>
</figure>

We now have two circles, and can note that they're overlapping each other.

When working with pen and paper, we can focus our eyes on where the circles are
intersecting, and place the pen as close as possible the intersection and form a
point there.

In the idealized case, we assume that we have *perfect* eye sight, and can place
a point *exactly* at the intersection.

The point of intersection above segment $AB$ will be called $C$:

<figure>
    <script type="text/tikz">
        \begin{tikzpicture}[scale=1.25, transform shape]
        \draw
            (0,0) node[left]{A}
            -- (3,0) node[right]{B};
        \draw (0,0) circle (3);
        \draw (3,0) circle (3);
        \draw (0.5 * 3, 0.866 * 3) node{\textbullet};
        \draw (0.5 * 3, 0.866 * 3) node[above]{C};
        \end{tikzpicture}
    </script>
    <figcaption>forming the point of intersection.</figcaption>
</figure>

Let's now use Postulate 1 and this new point $C$ to form two more segments $AC$
and $BC$:

<figure>
    <script type="text/tikz">
        \begin{tikzpicture}[scale=1.25, transform shape]
        \draw
            (0,0) node[left]{A}
            -- (3,0) node[right]{B}
            -- ++(120:3) node[above]{C}
            -- cycle;
        \draw (0,0) circle (3);
        \draw (3,0) circle (3);
        \end{tikzpicture}
    </script>
    <figcaption>joining the segments AC and BC.</figcaption>
</figure>

The finished result is a triangle:

<figure>
    <script type="text/tikz">
        \begin{tikzpicture}[scale=1.25, transform shape]
        \draw
            (0,0) node[left]{A}
            -- (3,0) node[right]{B}
            -- ++(120:3) node[above]{C}
            -- cycle;
        \end{tikzpicture}
    </script>
    <figcaption>the completed triangle.</figcaption>
</figure>

This concludes the construction.

## Verifying that the construction is correct

Given the triangle that was constructed, we may ask: is it an *equilateral*
triangle?

Since the figure consists of three segments, we know that it is a triangle. Next
we'll prove that these three sides are equal to each other.

### Equality of $AB$ and $AC$

We'll start by claiming that $AB$ and $AC$ are equal segments:

$$
\begin{equation}
   AB = AC
\end{equation}
$$

To show that this is true, we can first observe that the segments $AB$ and $AC$ are both
radii to the same circle $\bigcirc A$:

<figure>
    <script type="text/tikz">
        \begin{tikzpicture}[scale=1.25, transform shape]
            \draw[dotted] (0,0) circle (3);
            \draw[dotted] (3,0) circle (3);
            \draw[thick]
                (0.5 * 3, 0.866 * 3) node[above]{C}
                -- (0,0) node[left]{A}
                -- (3,0) node[right]{B};
            \draw[dotted] (0.5 * 3, 0.866 * 3) -- (3,0);
        \end{tikzpicture}
    </script>
    <figcaption>Segments AC and AB as equal radii.</figcaption>
</figure>

We can recall that we previously stated that all radii of the same circle are
equal, so consequently we now know that $AB$ and $AC$ are equal.

### Equality of $AB$ and $BC$

The second claim we'll make is that $AB$ and $BC$ are equal:

$$
\begin{equation}
   AB = BC
\end{equation}
$$

This follows by the same argument as we made for equation $(1)$, by observing
that the figure is symmetrical, such that both $AB$ and $BC$ are equal radii to circle $\bigcirc B$:

<figure>
    <script type="text/tikz">
        \begin{tikzpicture}[scale=1.25, transform shape]
            \draw[dotted] (0,0) circle (3);
            \draw[dotted] (3,0) circle (3);
            \draw[thick]
                (0.5 * 3, 0.866 * 3) node[above]{C}
                -- (3,0) node[right]{B}
                -- (0,0) node[left]{A};
            \draw[dotted] (0.5 * 3, 0.866 * 3) -- (0,0);
        \end{tikzpicture}
    </script>
    <figcaption>Line AC and AB as equal radii.</figcaption>
</figure>

Because of this symmetry, we now also know that $AB$ and $BC$ are equal.

### Equality of $AC$ and $BC$

The third equality we'll claim is the following:

$$
\begin{equation}
   AC = BC
\end{equation}
$$

To prove this, we'll use Axiom 1 from the *Elements*:

> Things which equal the same thing also equal one another.

This says that if we know that $X$ is equal to $Y$, and $X$ is equal to $Z$,
then we can combine these two facts to know that $Y$ is equal to $Z$.

Formally, this can be written schematically like this:

$$
\begin{equation}
\begin{array}{c}
    X = Y \\
    X = Z \\
    \hline
    Y = Z
\end{array}
\end{equation}
$$

The statements above the line are called the premises, and the statement below
the line is called the conclusion.

If, after substituting the variables $X$, $Y$ and $Z$, the premises are both
true, then the conclusion will also be true.

We can plug in equations $(1)$, $(2)$ and $(3)$ into Axiom 1 to get:

$$
\begin{equation}
\begin{array}{c}
    AB = AC \\
    AB = BC \\
    \hline
    AC = BC
\end{array}
\end{equation}
$$

Since $AC$ is the same length as $AB$, and $BC$ is the same length as $AB$, then
that means that $AC$ and $BC$ have the same length.

<figure>
    <script type="text/tikz">
        \begin{tikzpicture}[scale=1.25, transform shape]
            \draw[dotted] (0,0) circle (3);
            \draw[dotted] (3,0) circle (3);
            \draw[thick]
                (0,0) node[left]{A}
                -- (0.5 * 3, 0.866 * 3) node[above]{C}
                -- (3,0) node[right]{B};
            \draw[dotted] (0,0) -- (3,0);
        \end{tikzpicture}
    </script>
    <figcaption>segments AC and BC as equal radii.</figcaption>
</figure>

So, we now know that $AC = BC$.

### Equality of all three sides

We now know all three of the statements $AB = AC$, $AB = BC$ and $AC = BC$.

Consequently we know that $AB = AC = BC$.

In other words, we know that all three sides of the triangle we constructed are
equal each to other.

This means that the triangle we constructed from the line segment is
equilateral, which was what we wanted to do.

This concludes the proof.

## Composing propositions

In this post, we first constructed a figure through a sequence of explicit
steps, and then we analyzed the construction to show that it had all the desired
properties.

Most problems in the *Elements* are solved in this style:
1. A figure is constructed
2. Properties of the figure is proved

Each of the propositions in the *Elements* build upon earlier ones, where the figure
that is to be constructed uses steps from other propositions as building blocks.

<figure>
    <script type="text/tikz">
        \begin{tikzpicture}[scale=1.35, transform shape]
            \draw  (0,0) circle (3);
            \draw  (0,0) node[left]{D}
                -- (-15:1) circle (2) node[anchor=south west]{B}
                -- (-15:3) node[anchor=south east]{G}
                -- (-15:4) node[above]{F};
            \draw  (75:1.725) node[above]{C}
                -- (-15:1);
            \draw  (0,0)
                -- (-75:1) node[left]{A}
                -- (-15:1);
            \draw  (-75:1)
                -- (-75:3) node[anchor=south east]{L}
                -- (-75:4) node[anchor=south east]{E};
        \end{tikzpicture}
    </script>
    <figcaption>finished construction for Proposition 2</figcaption>
</figure>


Already in Proposition 2, a given line segment $BC$ is to be moved to coincide
with a given point $A$, and one of the steps is to use Proposition 1 to form an
equilateral triangle $\Delta ABD$ from line $AB$.

Not only are the constructions composable, but the *proofs* also compose.
Proposition 2 will be able to rely on all the properties of the equilateral
triangle that was shown in Proposition 1.

### Constructive geometry and computer programs

The triangle was constructed through a series of explicit instructions, that had
the line segment $AB$ as a premise. Another way of viewing this is that the
segment is a *parameter* of the construction, which we can view as a sort of
procedure.

$$
\text{Proposition1} : \text{Segment} \rightarrow \text{EquilateralTriangle}
$$

When the propositions in the *Elements* are built up by using earlier
propositions, there's a parallel to how functions in computer programs are
composed together.

The construction in Proposition 1 can be expressed with this psuedocode:

```ts
function equilateral_triangle({a, b}: Segment) {
    let circle_a = Circle(a, {a, b})
    let circle_b = Circle(b, {a, b})
    let c = intersection(circle_a, circle_b)[0] // pick first intersection
    return Triangle(a, b, c)
}
```

Working through the *Elements*, you get a sense how something big and complex can be
built out of smaller parts, and how we can have an understanding of the complex
thing by understanding its parts.

## Closing remarks

If you enjoyed this post, I encourage you to get hold of a ruler and a compass
and trying this construction for yourself. Reading about math is one thing,
practicing it is another!

<figure>
<img src="/assets/images/2023-07-09/complete_triangle.jpg" alt="An equilateral triangle with two circles around it left over from the construction">
<figcaption>the completed triangle, drawn by hand.</figcaption>
</figure>

Once you get the hang of drawing circles with the compass, it'll just take a few
seconds to draw this, and it's a very satisfying thing to do.
