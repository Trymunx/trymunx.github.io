# Mapping alt + backspace to delete on Gallium OS

Started by looking through a lot of symbol config files in /usr/share/X11/xkb/symbols, the important ones were all of the chromebook ones (chromebook, chromebook_m, chromebook_m_ralt, and chromebook_ralt). These are included in GalliumOS and are what xkb selects from when you use the xfce4 layout picker [include screenshot of layout picker].

[Talk about what the overlay button does]
These had three options:
  1. using the search key as the overlay button
  2. using the right alt key as the overlay button
  3. not setting an overlay button at all
  but with all of the options, to get a delete key you had to use the overlay key with the backspace key. That wasn't good enough for me!

I spent a lot of time looking over [links] and found the xkb alt modifier:
``` 
    key <BKSP> {
      type= "PC_ALT_LEVEL2",
      symbols[Group1]= [BackSpace, Delete ]
    };
```
I set this in the /usr/share/X11/xkb/symbols/**pc** file, which is also loaded by xkb using Gallium's built in xkb layouts [need to include `setxkbmap -query -v 10` to show what is going on]. This was because I didn't think backspace behaviour was really related to the chrombook necessarily (although that is the behaviour I'm copying); but mostly was because if I wanted to change between the chromebook layouts--function keys with overlay enabling media keys or vice versa--I would need to edit all of these files to add the backspace line in. If I just modify the pc symbols file it will be the same for all chromebook layouts.

However, I had a problem. It was working in most places I tested it, but not in terminal. I spent some time using xev to see if there was something weird about the keycode being sent, because in terminal it would behave very weirdly. Pressing the delete key in terminal didn't delete the character under the cursor, it instead jumped the cursor forward 3 characters and swapped the case of the characters it jumped over [add gif of behaviour]. It would also break my normal backspace behaviour when it did this, which was very confusing.
It took me far too long to figure out what was happening, even when I had used `Ctrl + v` then `Alt + Backspace` to find that the keycode it was inputting was `^[[3;3~`. I had set up my terminal [with vi keybindings](link to vi keybindings) (`set -o vi` in .bashrc), so after escaping (^[), something was happening then 3~ was swapping the case of 3 characters (~ in vi swaps the case). 
The fix for me was to add these lines to my bashrc:
```
  bind -m vi-insert '"\e[3;3~": delete-char'
  bind -m vi-move '"\e[3;3~": delete-char'
```

It still doesn't properly work in vim, however.
