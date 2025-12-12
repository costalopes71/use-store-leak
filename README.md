# Steps to reproduce

- run: `npm run build`
- run: `npm run preview`
- in Google Chrome open `chrome://inspect` and configure port forwarding and device discover to port 9229 and localhost
- your application should be listed under Remote Target section
- click inspect
- in another browser tab visit `localhost:4321/` five times
- take a memory snapshot and under the `Filter by class` search filter by `Dep`
- [ ] you should see 5 `Dep` objets allocated in memory
- make 10 more visits to `localhost:4321`
- take a new memory snapshot
- search for `Dep` again
- [ ] you now should see 15 `Dep` objects allocated in memory
- lets test our work around
- visit `localhost:4321/leaking-work-around` 20 times
- [ ] `Dep` objects should not have increased
