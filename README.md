# Stride Shoes (Tensteps demo)

A tiny static shoe shop used to test Tensteps end to end. Every pull request
gets a Vercel preview, and Tensteps sends AI personas through checkout and
comments on the PR with what happened.

The `new-zip-check` branch adds stricter ZIP validation that wrongly rejects
ZIP codes starting with 4 (Ohio, Kentucky, much of the Midwest). Its PR should
get a Tensteps comment pointing at the ZIP field.
